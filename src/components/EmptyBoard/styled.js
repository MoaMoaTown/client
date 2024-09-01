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
  justify-content: space-between;
  padding: 4px;
`;

export const BottomWrapper = styled.div`
  flex: 1;
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
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const TopTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: -20px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray};
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionBox = styled.div`
  width: 27dvw;
  height: 24dvh;
  background-color: ${colors.background_gray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const AverageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;

export const AverageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: bold;
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
  margin-top: -4px;
  margin-bottom: -4px;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.black};
`;

export const SellButton = styled.button`
  width: 80%;
  padding: 5px 10px;
  background-color: ${colors.green};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export const HintBubble = styled.div`
  position: relative;
  background-color: ${colors.background_gray};
  color: ${colors.white};
  padding: 15px 15px;
  border-radius: 15px;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  max-width: 80px;
  height: 40px;

  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: ${colors.background_gray} transparent transparent transparent;
    z-index: 1;
  }
`;

export const TypeText = styled.span`
  font-size: 1.5rem;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const PriceText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.primary};
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

export const BottomMoaImage = styled.img`
  width: 4dvw;
  height: 4dvw;
  margin-left: 5px;
  vertical-align: middle;
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
