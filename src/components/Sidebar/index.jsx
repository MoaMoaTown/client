import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { logout } from '../../apis/memberApi';
import { loginState, loginInfo } from '../../store/atoms';
import {
  SidebarContainer,
  CloseIcon,
  LogoImage,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkIcon,
  CopyrightText,
  LogoutText,
} from './styled';
import logo from '../../assets/images/logo.png';
import closeIcon from '../../assets/images/close.svg';
import one from '../../assets/images/sidebar_1.svg';
import two from '../../assets/images/sidebar_2.svg';
import three from '../../assets/images/sidebar_3.svg';
import four from '../../assets/images/sidebar_4.svg';
import five from '../../assets/images/sidebar_5.svg';
import six from '../../assets/images/sidebar_6.svg';
import seven from '../../assets/images/sidebar_7.svg';
import eight from '../../assets/images/sidebar_8.svg';

/**
 * 사이드 메뉴 바 컴포넌트
 * @author 이주현
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  이주현      최초 생성
 * </pre>
 */

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const setLoginState = useSetRecoilState(loginState);
  const setLoginInfo = useSetRecoilState(loginInfo);

  const mutation = useMutation(logout, {
    onSuccess: () => {
      setLoginState({ isLogin: false });
      setLoginInfo({});
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
    <SidebarContainer isOpen={isOpen}>
      <CloseIcon src={closeIcon} onClick={toggleSidebar} />
      <Link to='/main'>
        <LogoImage src={logo} />
      </Link>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink as={Link} to='/dept' onClick={toggleSidebar}>
            <SidebarLinkIcon src={one} />
            백화점
          </SidebarLink>
          <SidebarLink as={Link} to='/jobmoa' onClick={toggleSidebar}>
            <SidebarLinkIcon src={two} />
            잡모아
          </SidebarLink>
          <SidebarLink as={Link} to='/invest' onClick={toggleSidebar}>
            <SidebarLinkIcon src={three} />
            흰디의 내일
          </SidebarLink>
          <SidebarLink as={Link} to='/knowledge' onClick={toggleSidebar}>
            <SidebarLinkIcon src={four} />
            젤뽀의 경제 교실
          </SidebarLink>
          <SidebarLink as={Link} to='/quest' onClick={toggleSidebar}>
            <SidebarLinkIcon src={five} />
            퀘스트
          </SidebarLink>
          <SidebarLink as={Link} to='/rank' onClick={toggleSidebar}>
            <SidebarLinkIcon src={six} />
            랭킹
          </SidebarLink>
          <SidebarLink as={Link} to='/account' onClick={toggleSidebar}>
            <SidebarLinkIcon src={seven} />
            통장
          </SidebarLink>
          <SidebarLink as={Link} to='/closet-entry' onClick={toggleSidebar}>
            <SidebarLinkIcon src={eight} />
            흰디 꾸미기
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <LogoutText onClick={handleLogout}>로그아웃</LogoutText>
      <CopyrightText>{`© 2024 The More.\nAll rights reserved.`}</CopyrightText>
    </SidebarContainer>
  );
};

export default Sidebar;
