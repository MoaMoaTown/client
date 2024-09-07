import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchBalance } from '../../apis/memberApi';
import { Sidebar, NotiModal } from '../index';
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

/**
 * 헤더 컴포넌트
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

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotiModalOpen, setIsNotiModalOpen] = useState(false);
  const {
    data: balance = '',
    isLoading,
    isError,
  } = useQuery('balance', fetchBalance);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotiModal = () => {
    setIsNotiModalOpen(!isNotiModalOpen);
  };

  return (
    <Container>
      <LeftWrapper>
        <MoaImage src={moa} />
        <BalanceText>{balance}</BalanceText>
      </LeftWrapper>
      <RightWrapper>
        <NotiImage src={noti} onClick={toggleNotiModal} />
        <Link to='/mypage'>
          <MypageImage src={mypage} />
        </Link>
        <MenuImage src={menu} onClick={toggleSidebar} />
      </RightWrapper>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <NotiModal isOpen={isNotiModalOpen} toggleNotiModal={toggleNotiModal} />
    </Container>
  );
};

export default Header;
