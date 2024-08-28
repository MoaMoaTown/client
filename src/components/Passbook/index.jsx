import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchBalance } from '../../apis/memberApi';
import { Container, PassbookImage, TitleText, BalanceText } from './styled';
import passbook from '../../assets/images/passbook.svg';

const Passbook = () => {
  const {
    data: balance = '',
    isLoading,
    isError,
  } = useQuery('balance', fetchBalance);

  return (
    <Container>
      <PassbookImage src={passbook} />
      <TitleText>나의 통장</TitleText>
      <BalanceText>{balance} MOA</BalanceText>
    </Container>
  );
};

export default Passbook;
