import React from 'react';
import { Link } from 'react-router-dom';
import {
  SidebarContainer,
  CloseIcon,
  LogoImage,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkIcon,
  CopyrightText,
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

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseIcon src={closeIcon} onClick={toggleSidebar} />
      <LogoImage src={logo} />
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink as={Link} to="/dept" onClick={toggleSidebar}>
            <SidebarLinkIcon src={one} />
            백화점
          </SidebarLink>
          <SidebarLink onClick={toggleSidebar}>
            <SidebarLinkIcon src={two} />
            잡모아
          </SidebarLink>
          <SidebarLink onClick={toggleSidebar}>
            <SidebarLinkIcon src={three} />
            흰디의 내일
          </SidebarLink>
          <SidebarLink as={Link} to="/knowledge" onClick={toggleSidebar}>
            <SidebarLinkIcon src={four} />
            젤뽀의 경제 교실
          </SidebarLink>
          <SidebarLink onClick={toggleSidebar}>
            <SidebarLinkIcon src={five} />
            게시판
          </SidebarLink>
          <SidebarLink as={Link} to="/rank" onClick={toggleSidebar}>
            <SidebarLinkIcon src={six} />
            랭킹
          </SidebarLink>
          <SidebarLink as={Link} to="/mypage" onClick={toggleSidebar}>
            <SidebarLinkIcon src={seven} />
            마이페이지
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <CopyrightText>{`© 2024 The More.\nAll rights reserved.`}</CopyrightText>
    </SidebarContainer>
  );
};

export default Sidebar;
