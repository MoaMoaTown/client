import React from 'react';
import { Container, LoadingContainer, Circle, Info } from './styled';
import { colors } from '../../styles/colors';

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
