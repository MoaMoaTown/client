import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { fetchRanks } from '../../apis/memberApi';
import { Header, Rank } from '../../components';
import { Container, Title, Image, RankList } from './styled';
import rank from '../../assets/images/rank.svg';

const Ranking = () => {
  const rankListRef = useRef(null);
  const { data: rankData = [] } = useQuery('ranks', fetchRanks);

  useEffect(() => {
    if (rankData.length > 0) {
      const currentUserIndex = rankData.findIndex(
        (user) => user.isCurrentUser === 'Y'
      );
      if (currentUserIndex !== -1 && rankListRef.current) {
        const currentUserElement =
          rankListRef.current.children[currentUserIndex];
        currentUserElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [rankData]);

  return (
    <Container>
      <Header />
      <Image src={rank} />
      <Title>랭킹</Title>
      <RankList ref={rankListRef}>
        {rankData.map((user, index) => (
          <Rank
            key={index}
            ordinal={index + 1}
            profile={user.profile}
            nickname={user.nickname}
            balance={user.balance}
            isCurrentUser={user.isCurrentUser}
          />
        ))}
      </RankList>
    </Container>
  );
};

export default Ranking;
