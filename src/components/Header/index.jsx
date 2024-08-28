import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../apis';
import {
  Container,
  LeftWrapper,
  RightWrapper,
  MoaImage,
  BalanceText,
  NotiImage,
  MypageImage,
  MenuImage,
} from './styled';
import moa from '../../assets/images/moa.svg';
import noti from '../../assets/images/noti.svg';
import mypage from '../../assets/images/mypage.svg';
import menu from '../../assets/images/hamburger_menu.svg';

const Header = () => {
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
      <LeftWrapper>
        <MoaImage src={moa} />
        <BalanceText>{balance}</BalanceText>
      </LeftWrapper>
      <RightWrapper>
        <NotiImage src={noti} />
        <MypageImage src={mypage} />
        <MenuImage src={menu} />
      </RightWrapper>
    </Container>
  );
};

export default Header;
