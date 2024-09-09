import styled from 'styled-components';
import { colors } from '../../styles/colors';
import ChevronUp from '../../assets/images/Chevron_Up.svg';
import ChevronDown from '../../assets/images/Chevron_Down.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Container = styled.div`
  position: relative;
  z-index: 100;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  padding: 4.5dvh 5dvw;
  width: 70dvw;
  height: 50dvh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-position: right bottom 10%;
  background-size: 35%;
`;

export const HintText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2dvh;
`;

export const HdyImage = styled.img`
  width: 24dvw;
  height: auto;
`;

export const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-top: 2dvh;
  width: 100%;
`;
export const PayInput = styled.input`
  width: 100%;
  height: 4dvh;
  padding: 1dvw 7dvw;
  font-size: 1rem;
  background-color: ${colors.background_gray};
  border-radius: 30px;
  border: 1px solid ${colors.gray};
  outline: none;
  margin-right: -2dvw;
  margin-left: 10dvw;
`;

export const QuantityContainer = styled.div`
  display: flex;
  width: 28dvw;
  height: 4dvh;
  align-items: center;
  border-radius: 20px;
  padding: 2px;
  // border: 1px solid blue;
  margin-left: 10dvw;
`;

export const QuantityDisplay = styled.span`
  width: 20dvw;
  text-align: center;
`;

export const ArrowButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  margin-right: 1dvw;

  &.up {
    background-image: url(${ChevronUp});
  }

  &.down {
    background-image: url(${ChevronDown});
  }

  background-repeat: no-repeat;
  background-size: contain;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%)
    contrast(100%);
`;

export const TotalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.primary};
  display: flex;
  align-items: center;
  margin-left: 9dvw;
`;

export const TotalPriceTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 2dvh;
  margin-left: 20dvw;
`;
export const TotalPriceText = styled.div`
  width: 30%;
`;

export const YesterdayToday = styled.div`
  justify-content: space-around;
  width: 110%;
  height: 30%;
  align-items: center;

  display: flex;
`;

export const YesterdayPriceWrapper = styled.div`
  font-size: 1.5rem;
  color: ${colors.orange};
  margin: 0.75dvh 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const YesterdaySection = styled.div`
  width: 40%;
  height: auto;
`;
export const TodaySection = styled.div`
  width: 40%;
  height: auto;
  align-items: center;
`;

export const TodayPriceWrapper = styled.div`
  font-size: 1.5rem;
  color: ${colors.orange};
  margin: 0.75dvh 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CurrentMoa = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.secondary};
  margin-top: 2dvh;
`;

export const TitleText = styled.h2`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 2dvh;
  font-weight: bold;
`;

export const MoaImage = styled.img`
  width: 8dvw;
  height: 8dvh;
  margin-left: 5px;
`;

export const YesterdayText = styled.div`
  color: black;
  font-weight: bold;
  margin-bottom: 2dvh;
`;

export const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
