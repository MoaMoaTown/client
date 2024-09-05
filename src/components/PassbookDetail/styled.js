import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  width: 96.5%;
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
  bottom: 5%;
  right: 3dvw;
  font-size: 1.4rem;
  color: ${colors.dark_gray};
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 28%;
  left: 0;
  right: 0;
  bottom: 15%;
  overflow-y: auto;
`;

export const TransactionItem = styled.div`
  padding: 2dvh 3dvw;
  border-bottom: 2px solid ${colors.background_gray};
`;

export const TransactionDate = styled.span`
  color: ${colors.gray};
  font-size: 1rem;
  display: block;
  margin-bottom: 0.6dvh;
`;

export const TransactionDescription = styled.div`
  display: inline-block;
  font-size: 1.2rem;
  vertical-align: middle;
`;

export const TransactionAmount = styled.div`
  display: inline-block;
  float: right;
  font-size: 1.2rem;
  font-weight: bold;
  vertical-align: middle;
`;

export const LoadMoreTrigger = styled.div`
  height: 1dvh;
`;
