import React from 'react';
import { Container, LoadingContainer, Circle, Info } from './styled';
import { colors } from '../../styles/colors';

const Loading = () => {
  return (
    <Container>
      <LoadingContainer>
        <Circle delay="0s" color={colors.green} />
        <Circle delay="0.2s" color={colors.light_green} />
        <Circle delay="0.4s" color={colors.intermediate_color} />
        <Circle delay="0.6s" color={colors.light_orange} />
        <Circle delay="0.8s" color={colors.orange} />
      </LoadingContainer>
      <Info>타운으로 들어가는 중...</Info>
    </Container>
  );
};

export default Loading;
