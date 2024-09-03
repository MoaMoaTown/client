import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '../../store/atoms';
import {
  Container,
  LeftWrapper,
  Title,
  LogoImage,
  RightWrapper,
  NotiImage,
  Nickname,
  Logout,
} from './styled';
import { NotiModal } from '../index';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import noti from '../../assets/images/noti.svg';

const AdminHeader = () => {
  const user = useRecoilValue(loginInfo);
  const [isNotiModalOpen, setIsNotiModalOpen] = useState(false);

  const toggleNotiModal = () => {
    setIsNotiModalOpen(!isNotiModalOpen);
  };
  const handleLogout = () => {};
  return (
    <Container>
      <LeftWrapper>
        <Title>관리자 페이지</Title>
      </LeftWrapper>
      <Link to='/admin'>
        <LogoImage src={logo} />
      </Link>
      <RightWrapper>
        <NotiImage src={noti} onClick={toggleNotiModal} />
        <Nickname>{user.nickname}님</Nickname>
        <Logout onClick={handleLogout}>로그아웃</Logout>
      </RightWrapper>
      <NotiModal isOpen={isNotiModalOpen} toggleNotiModal={toggleNotiModal} />
    </Container>
  );
};

export default AdminHeader;
