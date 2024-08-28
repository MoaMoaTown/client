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
  top: 15%;
  left: 10%;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const BalanceText = styled.span`
  position: absolute;
  bottom: 15%;
  right: 10%;
  font-size: 1.5rem;
  color: ${colors.dark_gray};
  font-weight: bold;
`;
