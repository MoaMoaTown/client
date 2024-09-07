import React from 'react';
import { Container, LoadingContainer, Circle, Info } from './styled';
import { colors } from '../../styles/colors';

/**
 * 로딩 컴포넌트
 * @author 이주현
 * @since 2024.08.27
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.27  이주현      최초 생성
 * </pre>
 */

const Loading = ({ text, page }) => {
  return (
    <Container page={page}>
      <LoadingContainer>
        <Circle delay='0s' color={colors.green} />
        <Circle delay='0.2s' color={colors.light_green} />
        <Circle delay='0.4s' color={colors.intermediate_color} />
        <Circle delay='0.6s' color={colors.light_orange} />
        <Circle delay='0.8s' color={colors.orange} />
      </LoadingContainer>
      <Info>{text}</Info>
    </Container>
  );
};

export default Loading;
