import styled from 'styled-components';
import { colors } from '../../styles/colors';
import bg from '../../assets/images/cupid.png';
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
  z-index: 1000;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1001;
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
  width: 80dvw;
  height: 52dvh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-image: url(${bg});
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
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

export const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2dvh 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1dvw;
  background-color: ${colors.background_gray};
  border-radius: 20px;
  padding: 2px;
`;

export const QuantityDisplay = styled.span`
  width: 40px;
  text-align: center;
`;

export const ArrowButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.up {
    background-image: url(${ChevronUp});
  }

  &.down {
    background-image: url(${ChevronDown});
  }

  background-repeat: no-repeat;
  background-size: contain;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%)
    contrast(100%); /* 검정색으로 변경 */
`;

export const TotalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.primary};
  margin: 2dvh 0;
  display: flex;
  align-items: center;
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
`;

export const MoaImage = styled.img`
  width: 8dvw;
  height: 8dvh;
  margin-left: 5px;
`;
