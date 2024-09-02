import React from 'react';
import { Header, EmptyBoard } from '../../components';

import { Container, Title } from './styled';

const Invest = () => {
  //const { refetch } = useQuery('balance', fetchBalance);

  return (
    <Container>
      <Header />
      <Title>흰디의 내일을 맞춰봐요</Title>
      <EmptyBoard />
    </Container>
  );
};

export default Invest;
