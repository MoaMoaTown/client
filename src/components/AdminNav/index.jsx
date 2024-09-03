import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  MenuWrapper,
  Title,
  Menu,
  MenuLink,
  CopyrightText,
  TownInfoWrapper,
  TownInfo,
} from './styled';

const AdminNav = ({ townInfo }) => {
  return (
    <Container>
      <TownInfoWrapper>
        <Title>{townInfo.name}</Title>
        <Menu>
          <TownInfo>{townInfo.description}</TownInfo>
          <TownInfo>타운 코드 : {townInfo.townCode}</TownInfo>
        </Menu>
      </TownInfoWrapper>
      <MenuWrapper>
        <Title>역할</Title>
        <Menu>
          <MenuLink as={Link} to=''>
            역할 관리
          </MenuLink>
          <MenuLink as={Link} to=''>
            역할 신청 내역
          </MenuLink>
        </Menu>
        <Title>위시 상품</Title>
        <Menu>
          <MenuLink as={Link} to=''>
            위시 상품 관리
          </MenuLink>
          <MenuLink as={Link} to=''>
            위시 요청 내역
          </MenuLink>
        </Menu>
        <Title>퀘스트</Title>
        <Menu>
          <MenuLink as={Link} to=''>
            퀘스트 관리
          </MenuLink>
        </Menu>
      </MenuWrapper>
      <CopyrightText>{`© 2024 The More.\nAll rights reserved.`}</CopyrightText>
    </Container>
  );
};

export default AdminNav;
