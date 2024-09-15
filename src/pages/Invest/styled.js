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
  overflow-y: hidden;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ;
`;
export const Description = styled.div`
  font-size: 1rem;
  text-align: center;
  white-space: pre-line;
  color: ${colors.dark_gray};
  line-height: 1.5;
  margin-top: -1dvh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 8dvw;
  margin-left: 1dvw;
`;
