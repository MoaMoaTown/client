import React from 'react';
import { Header, KnowledgeCard } from '../../components';

import { Container, Title } from './styled';

/**
 * 젤뽀의 경제 교실 페이지
 * @author 이주현
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  이주현      최초 생성
 * </pre>
 */

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
