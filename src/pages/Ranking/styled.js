import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  background: ${colors.background_gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 84dvw;
  height: 92dvh;
  padding: 4dvh 8dvw;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  text-align: left;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 60%;
`;

export const RankList = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2dvh;
  overflow-y: auto;
`;
