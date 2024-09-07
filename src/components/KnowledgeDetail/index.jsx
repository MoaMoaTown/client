import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { useGesture } from '@use-gesture/react';
import { selectedKnowledgeIdState } from '../../store/atoms';
import {
  fetchKnowledgeDetail,
  fetchWordExplanation,
} from '../../apis/knowledgeApi';
import { GptModal, Loading } from '../index';
import {
  DetailContainer,
  DetailTitle,
  DetailContent,
  DetailDate,
  BackButton,
} from './styled';

/**
 * 경제 교실 페이지 상세 조회 컴포넌트
 * @author 이주현
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  이주현      최초 생성
 * </pre>
 */

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
    return (
      <DetailContainer>
        <Loading text={'지식 상세 정보 불러오는 중...'} />
      </DetailContainer>
    );
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
