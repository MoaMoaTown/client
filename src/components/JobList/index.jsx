import React, { useRef, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getJobsByTownId } from '../../apis/jobApi';
import {
  StyledJobButton,
  PriceWrapper,
  MoaImage,
  ListWrapper,
  LoadMoreTrigger,
  LoadingText,
} from './styled';
import moaImage from '../../assets/images/moa.svg';
import Loading from '../Loading';
/**
 * 역할 리스트 컴포넌트
 * @author 임재성
 * @since 2024.09.02
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.02  	임재성        최초 생성
 * </pre>
 */
const JobList = ({ onClick, ...rest }) => {
  const loadMoreRef = useRef();

  const fetchJobs = ({ pageParam = 0 }) =>
    getJobsByTownId({ page: pageParam, size: 5 });

  const {
    data: jobData = { pages: [] },
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery('jobs', fetchJobs, {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 5 ? allPages.length : undefined;
    },
  });

  useEffect(() => {
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

  return (
    <ListWrapper>
      {isLoading && <Loading />}
      {jobData.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.map((job) => (
            <StyledJobButton
              key={job.jobId}
              onClick={() => onClick(job)}
              {...rest}
            >
              <span>{job.name}</span>
              <PriceWrapper>
                {job.pay}
                <MoaImage src={moaImage} alt='Moa' />
              </PriceWrapper>
            </StyledJobButton>
          ))}
        </React.Fragment>
      ))}
      <LoadMoreTrigger ref={loadMoreRef} />
      {isFetchingNextPage && <LoadingText>Loading more jobs...</LoadingText>}
    </ListWrapper>
  );
};

export default JobList;
