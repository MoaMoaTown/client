import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 90%;
  height: 75%;
  border-radius: 20px;
  padding: 5%;
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
`;

export const BottomWrapper = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;

export const BottomSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 120%;
  margin-top: 2dvh;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.5dvh;
  margin-top: 1dvh;
`;
export const TopTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: -1.5dvh;
  // border: 1px solid red;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray};
`;

export const TopSectionTop = styled.div`
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const TopSectionBottom = styled.div`
  margin-top: 3dvh;
  width: 86dvw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const BuySectionBox = styled.div`
  width: 40dvw;
  height: 18dvh;
  border-radius: 50%;
  background-color: ${colors.white};
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InvestItemImage = styled.img`
  width: 14dvw;
  height: 16dvw;
`;

export const SectionBox = styled.div`
  width: 33dvw;
  height: 10dvh;
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
`;

export const AverageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  margin-top: -5.5dvh;
  margin-bottom: -0.5dvh;
`;

export const AverageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0px;
  font-size: 0.9rem;
`;

export const AverageLabel = styled.div`
  text-align: left;
  flex: 1;
`;

export const AverageValue = styled.div`
  text-align: right;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const TextLabel = styled.div`
  margin-top: 40px;
  margin-bottom: -2px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.black};
`;

export const SellButton = styled.div`
  margin-top: 6px;
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.orange};
`;

export const QuestionImage = styled.img`
  width: 16dvh;
  margin-top: -4dvh;
`;
export const QuestionAndHDY = styled.img``;

export const TypeText = styled.span`
  font-size: 0.9rem;
  margin-bottom: 5px;
  font-weight: bold;
  // border: 1px solid red;
  width: 24dvw;
  margin-left: 6dvw;
`;
export const BuyBotton = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.green};
`;

export const PriceText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.primary};
`;

export const InvestImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid red;
`;

export const HdyImage = styled.img`
  width: 22dvw;
  // height: 20dvh;
  margin-bottom: -4dvh;
`;
export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -2px;
  margin-left: -10px;
`;

export const MoaImage = styled.img`
  width: 8dvw;
  height: 8dvw;
`;

export const BottomMoaImage = styled.img`
  width: 4dvw;
  height: 4dvw;
  margin-left: 5px;
  vertical-align: middle;
`;

export const Balance = styled.span`
  font-size: 0.8rem;
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

export const PriceTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const PriceTypeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
export const HintTitle = styled.div`
  color: red;
  width: 100%;
  margin-top: 4dvh;
  margin-left: 3.5dvw;
  margin-bottom: 0.4dvh;
`;
export const HintContent = styled.div`
  width: 100%;
  margin-left: 4dvw;
`;

export const TitleWithLines = styled.div`
  width: 125%;
  display: flex;
  margin-top: 2dvh;
  margin-bottom: 1dvh;
  align-items: center;
  text-align: center;
  font-weight: bold;
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid black;
    margin: 0 10px;
  }
`;
