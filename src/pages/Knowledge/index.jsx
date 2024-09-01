import React from 'react';
import { Header, KnowledgeCard } from '../../components';

import { Container, Title } from './styled';

const Knowledge = () => {
  return (
    <Container>
      <Header />
      <Title>젤뽀의 경제 교실</Title>
      <KnowledgeCard />
    </Container>
  );
};

export default Knowledge;
