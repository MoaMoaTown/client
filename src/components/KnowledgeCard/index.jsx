import React, { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchKnowledge } from '../../apis/knowledgeApi';
import { KnowledgeDetail, Loading } from '../index';
import { useRecoilState } from 'recoil';
import { selectedKnowledgeIdState } from '../../store/atoms';
import {
  Container,
  TopWrapper,
  BottomWrapper,
  ScrollableArea,
  ItemWrapper,
  TitleText,
  InfoText,
  DateText,
  Image,
  HeaderWrapper,
  HeaderTitle,
  HeaderDate,
  LoadMoreTrigger,
} from './styled';
import bbo from '../../assets/images/bbo.png';

/**
 * 경제 교실 페이지 내부 컴포넌트
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

const KnowledgeCard = () => {
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useRecoilState(
    selectedKnowledgeIdState
  );
  const loadMoreRef = useRef();

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      'knowledgeList',
      ({ pageParam = 1 }) => fetchKnowledge(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage && lastPage.length === 6
            ? allPages.length + 1
            : undefined;
        },
      }
    );

  const formatDate = (dateString) => dateString.split(' ')[0];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <Container>
        <Loading text={'지식 리스트 불러오는 중...'} />
      </Container>
    );
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
            <ScrollableArea>
              {data.pages.map((page) =>
                page.map((knowledge) => (
                  <ItemWrapper
                    key={knowledge.knowledgeId}
                    onClick={() =>
                      setSelectedKnowledgeId(knowledge.knowledgeId)
                    }
                  >
                    <TitleText>{knowledge.title}</TitleText>
                    <DateText>{formatDate(knowledge.createdAt)}</DateText>
                  </ItemWrapper>
                ))
              )}
              <LoadMoreTrigger ref={loadMoreRef} />
            </ScrollableArea>
          </>
        )}
      </BottomWrapper>
    </Container>
  );
};

export default KnowledgeCard;
