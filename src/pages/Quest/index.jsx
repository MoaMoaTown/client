import React from 'react';
import { Header, QuestCard } from '../../components';

import { Container, Title } from './styled';

/**
 * 퀘스트 페이지
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
