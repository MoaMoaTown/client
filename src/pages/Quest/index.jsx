import React from 'react';
import { Header, QuestCard } from '../../components';

import { Container, Title } from './styled';

const Quest = () => {
  return (
    <Container>
      <Header />
      <Title>퀘스트</Title>
      <QuestCard />
    </Container>
  );
};

export default Quest;
