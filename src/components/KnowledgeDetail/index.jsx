import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { useGesture } from '@use-gesture/react';
import { selectedKnowledgeIdState } from '../../store/atoms';
import {
  fetchKnowledgeDetail,
  fetchWordExplanation,
} from '../../apis/knowledgeApi';
import { GptModal } from '../index';
import {
  DetailContainer,
  DetailTitle,
  DetailContent,
  DetailDate,
  BackButton,
} from './styled';

const KnowledgeDetail = () => {
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useRecoilState(
    selectedKnowledgeIdState
  );
  const [word, setWord] = useState('');
  const [explanation, setExplanation] = useState('설명을 불러오는 중입니다.');
  const [modalOpen, setModalOpen] = useState(false);

  const {
    data: knowledgeDetail,
    isLoading,
    isError,
  } = useQuery(
    ['knowledgeDetail', selectedKnowledgeId],
    () => fetchKnowledgeDetail(selectedKnowledgeId),
    { enabled: !!selectedKnowledgeId }
  );

  const formatDate = (dateString) => dateString.split(' ')[0];

  const bind = useGesture({
    onDragEnd: () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText.length > 0 && selectedText.length <= 10) {
        setWord(selectedText);
      } else if (selectedText.length > 10) {
        setWord('주의');
      }
    },
  });

  useEffect(() => {
    if (word === '주의') {
      setModalOpen(true);
      setExplanation('10자 넘는 단어는 검색하기 어려워요!');
    } else if (word) {
      setModalOpen(true);
      fetchWordExplanation(word)
        .then((data) => {
          setExplanation(data.description);
        })
        .catch(() => {
          setExplanation('설명을 불러오는 데 실패했습니다.');
        });
    }
  }, [word]);

  if (isLoading) {
    return <DetailContainer>Loading...</DetailContainer>;
  }

  if (isError) {
    return <DetailContainer>Error loading data</DetailContainer>;
  }

  return (
    <React.Fragment>
      <DetailContainer {...bind()}>
        <BackButton onClick={() => setSelectedKnowledgeId(null)}>
          뒤로가기
        </BackButton>
        <DetailTitle>{knowledgeDetail.title}</DetailTitle>
        <DetailDate>{formatDate(knowledgeDetail.createdAt)}</DetailDate>
        <DetailContent>{knowledgeDetail.content}</DetailContent>
      </DetailContainer>
      {modalOpen && (
        <GptModal
          setModalOpen={setModalOpen}
          word={word}
          explanation={explanation}
          setExplanation={setExplanation}
        />
      )}
    </React.Fragment>
  );
};

export default KnowledgeDetail;
