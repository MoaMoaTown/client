import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 25dvh;
  width: 100dvw;
  height: 75dvh;
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 10dvw;
  width: 60dvw;
  height: auto;
  object-fit: cover;
  z-index: -1;
`;

export const Logo = styled.img`
  width: 68dvw;
  margin-bottom: 6dvh;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2dvh;
  text-align: center;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2dvh;
  text-align: center;
  white-space: pre-line;
  color: ${colors.dark_gray};
  line-height: 1.5;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3dvh;
  width: 80dvw;
  max-width: 360px;
`;
