import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  background: ${colors.background_gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 84dvw;
  height: 92dvh;
  padding: 4dvh 8dvw;
  gap: 3dvh;
`;

export const ClosetTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  text-align: left;
  font-weight: bold;
`;

export const ClosetImage = styled.img`
  width: 100%;
`;
