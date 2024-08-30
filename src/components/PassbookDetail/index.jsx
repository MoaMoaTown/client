import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
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
} from './styled';
import passbook from '../../assets/images/longpassbook.svg';

const PassbookDetail = () => {
  const {
    data: transactions = [],
    isLoading,
    isError,
  } = useQuery('transactions', fetchAccount);

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
      </ContentWrapper>
      <BalanceText>
        {transactions.reduce((sum, t) => sum + t.moa, 0)} MOA
      </BalanceText>
    </Container>
  );
};

export default PassbookDetail;
