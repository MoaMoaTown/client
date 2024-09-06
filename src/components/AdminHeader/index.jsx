import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { logout } from '../../apis/memberApi';
import { loginState, loginInfo, townInfoState } from '../../store/atoms';
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
import logo from '../../assets/images/logo.png';
import noti from '../../assets/images/noti.svg';

/**
 * 관리자 페이지 헤더
 * @author 임원정
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03 	임원정        최초 생성
 * </pre>
 */

const AdminHeader = () => {
  const user = useRecoilValue(loginInfo);
  const navigate = useNavigate();
  const setLoginState = useSetRecoilState(loginState);
  const setLoginInfo = useSetRecoilState(loginInfo);
  const setTownInfo = useSetRecoilState(townInfoState);
  const [isNotiModalOpen, setIsNotiModalOpen] = useState(false);

  const toggleNotiModal = () => {
    setIsNotiModalOpen(!isNotiModalOpen);
  };
  const mutation = useMutation(logout, {
    onSuccess: () => {
      setLoginState({ isLogin: false });
      setLoginInfo({});
      setTownInfo({});
      navigate('/login');
    },
    onError: (error) => {
      console.error('로그아웃 실패:', error);
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };
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
