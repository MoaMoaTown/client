import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../apis';
import { Container, PassbookImage, TitleText, BalanceText } from './styled';
import passbook from '../../assets/images/passbook.svg';

const Passbook = () => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const handleBalance = async () => {
      try {
        const response = await axiosInstance.get('/member/balance', {});
        if (response.status === 200) {
          setBalance(response.data.balance);
        }
      } catch (error) {
        console.error('잔액 불러오기 실패:', error);
      }
    };

    handleBalance();
  }, []);

  return (
    <Container>
      <PassbookImage src={passbook} />
      <TitleText>나의 통장</TitleText>
      <BalanceText>{balance} MOA</BalanceText>
    </Container>
  );
};

export default Passbook;
