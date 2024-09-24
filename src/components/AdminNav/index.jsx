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

/**
 * 관리자 메뉴 바
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

const AdminNav = ({ townInfo }) => {
  return (
    <Container>
      <TownInfoWrapper>
        <Link to='/admin'>
          <Title>{townInfo.name}</Title>
        </Link>
        <Menu>
          <TownInfo>{townInfo.description}</TownInfo>
          <TownInfo>타운 코드 : {townInfo.townCode}</TownInfo>
        </Menu>
      </TownInfoWrapper>
      <MenuWrapper>
        <Title>역할</Title>
        <Menu>
          <MenuLink as={Link} to='/admin/job'>
            역할 관리
          </MenuLink>
          <MenuLink as={Link} to='/admin/job-request'>
            역할 신청 내역
          </MenuLink>
        </Menu>
        <Title>위시 상품</Title>
        <Menu>
          <MenuLink as={Link} to='/admin/wish'>
            위시 상품 관리
          </MenuLink>
          <MenuLink as={Link} to='/admin/wish-request'>
            위시 요청 내역
          </MenuLink>
        </Menu>
        <Title>퀘스트</Title>
        <Menu>
          <MenuLink as={Link} to='/admin/quest'>
            퀘스트 관리
          </MenuLink>
        </Menu>
        <Title>Google Analytics</Title>
        <Menu>
          <MenuLink as={Link} to='/admin/statics'>
            데이터 보기
          </MenuLink>
        </Menu>
      </MenuWrapper>
      <CopyrightText>{`© 2024 The More.\nAll rights reserved.`}</CopyrightText>
    </Container>
  );
};

export default AdminNav;
