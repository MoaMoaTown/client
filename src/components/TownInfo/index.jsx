import React from 'react';
import { useQuery } from 'react-query';
import { fetchTownInfo } from '../../apis/memberApi';
import {
  TownInfoContainer,
  InfoBox,
  StatsBox,
  TownName,
  TownDescription,
  InfoWrapper,
  StatItem,
  StatIcon,
  StatText,
  RankBadge,
  BadgeWrapper,
} from './styled';
import peopleIcon from '../../assets/images/people.svg';
import moaIcon from '../../assets/images/main_moa.svg';

const TownInfo = () => {
  const { data: townInfo = {} } = useQuery('townInfo', fetchTownInfo);

  const getRank = (totalTax) => {
    if (totalTax > 1000) return '4';
    if (totalTax > 500) return '3';
    if (totalTax > 100) return '2';
    return '1';
  };

  return (
    <TownInfoContainer>
      <InfoBox>
        <BadgeWrapper>
          <RankBadge>{getRank(townInfo.totalTax)}</RankBadge>
        </BadgeWrapper>
        <InfoWrapper>
          <TownName>{townInfo.name}</TownName>
          <TownDescription>{townInfo.description}</TownDescription>
        </InfoWrapper>
      </InfoBox>
      <StatsBox>
        <StatItem>
          <StatIcon src={peopleIcon} alt='Total Members' />
          <StatText>{townInfo.totalMembers}</StatText>
        </StatItem>
        <StatItem>
          <StatIcon src={moaIcon} alt='Total Tax' />
          <StatText>{townInfo.totalTax}</StatText>
        </StatItem>
      </StatsBox>
    </TownInfoContainer>
  );
};

export default TownInfo;
