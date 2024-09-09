import React from 'react';
import { Header, InvestBoard } from '../../components';

import { Container, Title, TitleWrapper, Description } from './styled';
/**
 * 투자 페이지 컴포넌트
 * @author 임재성
 * @since 2024.08.31
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.31  	임재성        최초 생성
 * </pre>
 */
const Invest = () => {
  return (
    <Container>
      <Header />
      <TitleWrapper>
        <Title>흰디의 내일을 맞춰봐요</Title>
      </TitleWrapper>
      <Description>
        {`흰디의 내일 몸무게와 걸음수를 예측해\n 모아를 벌어봐요!`}
      </Description>
      <InvestBoard />
    </Container>
  );
};

export default Invest;
