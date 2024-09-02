import React from 'react';
import { Header, InvestBoard } from '../../components';

import { Container, Title } from './styled';

const Invest = () => {
  //const { refetch } = useQuery('balance', fetchBalance);

  return (
    <Container>
      <Header />
      <Title>흰디의 내일을 맞춰봐요</Title>
      <InvestBoard />
    </Container>
  );
};

export default Invest;
