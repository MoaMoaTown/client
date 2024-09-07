import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchBalance } from '../../apis/memberApi';
import { Container, PassbookImage, TitleText, BalanceText } from './styled';
import passbook from '../../assets/images/passbook.svg';

/**
 * 마이페이지 내 통장 컴포넌트
 * @author 이주현
 * @since 2024.08.28
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.28  이주현      최초 생성
 * </pre>
 */

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
