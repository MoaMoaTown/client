import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchBalance } from '../../apis/memberApi';
import { Sidebar } from '../index';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    data: balance = '',
    isLoading,
    isError,
  } = useQuery('balance', fetchBalance);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container>
      <LeftWrapper>
        <MoaImage src={moa} />
        <BalanceText>{balance}</BalanceText>
      </LeftWrapper>
      <RightWrapper>
        <NotiImage src={noti} />
        <MypageImage src={mypage} />
        <MenuImage src={menu} onClick={toggleSidebar} />
      </RightWrapper>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </Container>
  );
};

export default Header;
