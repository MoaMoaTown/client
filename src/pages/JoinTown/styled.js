import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(202, 119, 0, 0.3),
    rgba(30, 157, 139, 0.3)
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8dvh;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
`;

export const Logo = styled.img`
  width: 90dvw;
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
