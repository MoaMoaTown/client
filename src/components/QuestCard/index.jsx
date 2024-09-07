import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchQuest, acceptQuest } from '../../apis/questApi';
import {
  Container,
  ContentWrapper,
  ItemWrapper,
  TitleWrapper,
  TitleText,
  DescriptionText,
  DateText,
  StatusButton,
  InfoWrapper,
  IconTextWrapper,
  IconImage,
  ParticipantsText,
} from './styled';
import limit from '../../assets/images/quest_limit.svg';
import moa from '../../assets/images/quest_moa.svg';

/**
 * 퀘스트 페이지 내부 컴포넌트
 * @author 이주현
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  이주현      최초 생성
 * </pre>
 */

const QuestCard = () => {
  const queryClient = useQueryClient();

  const { data: questList, isLoading } = useQuery('questList', fetchQuest);

  const mutation = useMutation(acceptQuest, {
    onSuccess: () => {
      queryClient.invalidateQueries('questList');
    },
  });

  const handleAcceptQuest = (questId) => {
    mutation.mutate(questId);
  };

  const getStatusText = (status) => {
    switch (status) {
      case 0:
        return '수락하기';
      case 1:
        return '수락 대기 중';
      case 2:
        return '퀘스트 수락';
      case 3:
        return '퀘스트 완료';
      case 4:
        return '퀘스트 마감';
      default:
        return '상태 미확인';
    }
  };

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <ContentWrapper>
        {questList.map((quest) => (
          <ItemWrapper key={quest.questId}>
            <TitleWrapper>
              <TitleText>{quest.title}</TitleText>
              <DateText>{`~${quest.deadline}`}</DateText>
            </TitleWrapper>
            <DescriptionText>{quest.description}</DescriptionText>
            <InfoWrapper>
              <IconTextWrapper>
                <IconImage src={limit} />
                <ParticipantsText>{quest.capacity}</ParticipantsText>
              </IconTextWrapper>
              <IconTextWrapper>
                <IconImage src={moa} />
                <ParticipantsText>{quest.reward}</ParticipantsText>
              </IconTextWrapper>
              <StatusButton
                onClick={() => handleAcceptQuest(quest.questId)}
                disabled={quest.status !== 0}
              >
                {getStatusText(quest.status)}
              </StatusButton>
            </InfoWrapper>
          </ItemWrapper>
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default QuestCard;
