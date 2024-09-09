import React from 'react';
import { Header, TownInfo, Model3D } from '../../components';
import { Container, HeaderWrapper, TownInfoWrapper } from './styled';

/**
 * 메인 페이지
 * @author 이주현
 * @since 2024.08.23
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.23  이주현      최초 생성
 * </pre>
 */

const Main = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <TownInfoWrapper>
        <TownInfo />
      </TownInfoWrapper>
      <Model3D />
    </Container>
  );
};

export default Main;
