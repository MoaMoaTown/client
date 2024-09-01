import React from 'react';
import { Header, TownInfo, Model3D } from '../../components';
import { Container, HeaderWrapper, TownInfoWrapper } from './styled';

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
