import React, { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchAccount } from '../../apis/memberApi';
import {
  Container,
  PassbookImage,
  TitleText,
  BalanceText,
  ContentWrapper,
  TransactionItem,
  TransactionDate,
  TransactionDescription,
  TransactionAmount,
  LoadMoreTrigger,
} from './styled';
import passbook from '../../assets/images/longpassbook.svg';

const PassbookDetail = () => {
  const loadMoreRef = useRef();

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      'transactions',
      ({ pageParam = 1 }) => fetchAccount({ page: pageParam }),
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.length === 5 ? allPages.length + 1 : undefined;
        },
      }
    );

  const getTransactionDescription = (type) => {
    switch (type) {
      case 0:
        return '타운 참가 보상';
      case 1:
        return '급여';
      case 2:
        return '이자';
      case 3:
        return '퀘스트 보상';
      case 4:
        return '매도';
      case 5:
        return '납세';
      case 6:
        return '일반 상품 구매';
      case 7:
        return '위시 상품 구매';
      case 8:
        return '매수';
      default:
        return '알 수 없는 거래';
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
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
    return <Container>Loading...</Container>;
  }

  const transactions = data ? data.pages.flat() : [];

  return (
    <Container>
      <PassbookImage src={passbook} />
      <TitleText>나의 통장</TitleText>
      <ContentWrapper>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.accountId}>
            <TransactionDate>{transaction.tradeDate}</TransactionDate>
            <TransactionDescription>
              {getTransactionDescription(transaction.type)}
            </TransactionDescription>
            <TransactionAmount>{transaction.moa}</TransactionAmount>
          </TransactionItem>
        ))}
        <LoadMoreTrigger ref={loadMoreRef} />
      </ContentWrapper>
      <BalanceText>
        {transactions.reduce((sum, t) => sum + t.moa, 0)} MOA
      </BalanceText>
    </Container>
  );
};

export default PassbookDetail;
