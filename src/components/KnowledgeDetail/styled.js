import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const DetailContainer = styled.div`
  width: 80%;
  padding: 10%;
  background-color: ${colors.background_gray};
  border-radius: 10px;
  flex: 1;
  overflow-y: auto;
`;

export const DetailTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1dvh;
`;

export const DetailDate = styled.p`
  font-size: 1rem;
  color: ${colors.dark_gray};
  margin-bottom: 2dvh;
`;

export const DetailContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const BackButton = styled.p`
  color: ${colors.purple};
  font-weight: 500;
  margin-bottom: 1.5dvh;
`;
