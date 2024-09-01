import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const PassbookImage = styled.img`
  width: 100%;
  height: auto;
`;

export const TitleText = styled.span`
  position: absolute;
  top: 3dvh;
  left: 6dvw;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const BalanceText = styled.span`
  position: absolute;
  bottom: 3dvh;
  right: 6dvw;
  font-size: 1.5rem;
  color: ${colors.dark_gray};
  font-weight: bold;
`;
