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
  padding: 3dvh 5dvw;
  width: 80dvw;
  height: 22dvh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-position: right bottom 10%;
  background-size: 35%;
`;

export const TitleText = styled.h2`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
`;

export const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: -10px;
  padding-left: 150px;
`;
export const PayInput = styled.input`
  width: 5%;
  height: 3dvh;
  padding: 1dvw 7dvw;
  font-size: 1rem;
  background-color: ${colors.background_gray};
  border-radius: 30px;
  border: 1px solid ${colors.gray};
  outline: none;
  margin-right: -2dvw;
  margin-left: 4dvw;
`;
export const QuantityLabel = styled.span`
  margin-left: 30px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  background-color: ${colors.background_gray};
  border-radius: 20px;
  padding: 2px;
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
  margin-left: 4dvw;

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
  color: ${colors.primary};
  display: flex;
  width: 100%;
  margin-top: 1dvh;
  padding-left: 150px;
`;

export const TotalLabel = styled.span`
  margin-left: -10px;
`;

export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const TotalTitle = styled.div`
  margin-right: 6dvw;
`;

export const MoaImage = styled.img`
  width: 10dvw;
  height: auto;
  margin-top: -0.8dvh;
`;

export const SellButtonContainer = styled.div`
  margin-top: 2dvh;
`;
