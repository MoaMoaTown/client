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
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: right bottom 10%;
  background-size: 35%;
`;

export const TitleText = styled.h2`
  font-size: 1.5rem;
  color: black;
`;

export const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: space-between; /* '개수' 텍스트와 토글을 양쪽에 배치 */
  width: 100%; /* 전체 너비 사용 */
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: -10px;
  padding-left: 150px; /* 왼쪽 여백 추가 */
`;

export const QuantityLabel = styled.span`
  margin-left: -10px; /* '개수' 텍스트를 왼쪽으로 더 이동 */
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px; /* 오른쪽 정렬 */
  background-color: ${colors.background_gray};
  border-radius: 20px;
  padding: 2px;
  //   width: 60px;
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
    contrast(100%);
`;

export const TotalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.primary};
  display: flex;
  //   justify-content: space-between; /* '총액' 텍스트와 숫자를 양쪽에 배치 */
  width: 100%;
  margin-top: 1dvh;
  padding-left: 150px; /* 왼쪽 여백 추가 */
`;

export const TotalLabel = styled.span`
  margin-left: -10px; /* '총액' 텍스트를 왼쪽으로 더 이동 */
`;

export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 숫자와 이미지 오른쪽 정렬 */
`;

export const MoaImage = styled.img`
  width: 8dvw;
  height: 8dvw;
  margin-left: 5px;
`;

export const SellButtonContainer = styled.div`
  margin-top: 2dvh;
`;
