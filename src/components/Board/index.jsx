import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchKnowledge } from '../../apis/knowledgeApi';
import { KnowledgeDetail } from '../index';
import { useRecoilState } from 'recoil';
import { selectedKnowledgeIdState } from '../../store/atoms';
import {
  Container,
  TopWrapper,
  BottomWrapper,
  ItemWrapper,
  TitleText,
  InfoText,
  DateText,
  Image,
  HeaderWrapper,
  HeaderTitle,
  HeaderDate,
} from './styled';
import bbo from '../../assets/images/bbo.png';

const Board = () => {
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useRecoilState(
    selectedKnowledgeIdState
  );
  const {
    data: knowledgeList,
    isLoading,
    isError,
  } = useQuery('knowledgeList', fetchKnowledge);

  const formatDate = (dateString) => dateString.split(' ')[0];

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <TopWrapper>
        <Image src={bbo} />
        <InfoText>{`지식 상세 화면에서 
모르는 단어에 
드래그를 해보세요!`}</InfoText>
      </TopWrapper>
      <BottomWrapper>
        {selectedKnowledgeId ? (
          <KnowledgeDetail />
        ) : (
          <>
            <HeaderWrapper>
              <HeaderTitle>제목</HeaderTitle>
              <HeaderDate>날짜</HeaderDate>
            </HeaderWrapper>
            {knowledgeList.map((knowledge) => (
              <ItemWrapper
                key={knowledge.knowledgeId}
                onClick={() => setSelectedKnowledgeId(knowledge.knowledgeId)}
              >
                <TitleText>{knowledge.title}</TitleText>
                <DateText>{formatDate(knowledge.createdAt)}</DateText>
              </ItemWrapper>
            ))}
          </>
        )}
      </BottomWrapper>
    </Container>
  );
};

export default Board;
