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
  flex: 1;
  display: flex;
  justify-content: space-between; /* 좌우로 두 개의 공간 */
  padding: 5%;
`;

export const BottomWrapper = styled.div`
  flex: 1; /* 절반 크기 */
  display: flex;
  align-items: center;
  justify-content: center; /* 내용 중앙 정렬 */
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.dark_gray}; /* 회색 선 */
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HintText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TypeText = styled.span`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

export const PriceText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.primary}; /* 강조 색상 */
`;

export const HdyImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const MoaImage = styled.img`
  width: 8dvw;
  height: 8dvw;
`;

export const Balance = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  margin-left: 2dvw;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
  width: 90%;
  background-color: ${colors.background_gray};
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
