import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 90%;
  height: 75%;
  background-color: white;
  border-radius: 20px;
  padding: 5%;
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
  height: 10%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0% 5%;
  width: 90;
  background-color: ${colors.background_gray};
  height: 10%;
  flex-shrink: 0;
`;

export const HeaderTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  flex: 1.5;
`;

export const HeaderDate = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  flex: 1;
`;

export const ScrollableArea = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px inset ${colors.background_gray};
  padding: 5%;
  width: 90%;
`;

export const TitleText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1.5;
  text-align: center;
`;

export const DateText = styled.span`
  font-size: 0.8rem;
  color: ${colors.gray};
  flex: 1;
  text-align: center;
`;

export const InfoText = styled.span`
  width: 50%;
  font-size: 1rem;
  font-weight: bold;
  white-space: pre-wrap;
`;

export const Image = styled.img``;

export const LoadMoreTrigger = styled.div`
  height: 1dvh;
  visibility: hidden;
`;
