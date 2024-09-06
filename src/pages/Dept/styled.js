import styled from 'styled-components';
import { colors } from '../../styles/colors';
import bg_green from '../../assets/images/bg_green.svg';

export const Container = styled.div`
  background: ${colors.background_gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 84dvw;
  height: 92dvh;
  padding: 4dvh 8dvw;
  gap: 3dvh;
`;

export const DeptTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  padding: 10% 5%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${bg_green});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ClothButtonStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.6dvh;
  overflow-y: auto;
`;
export const WishButtonStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2dvh;
  overflow-y: auto;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 200px;
  padding: 1dvh 2.5%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 95%;
`;

export const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 5dvh;
`;

export const ActiveBackground = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.activeIndex === 1 ? '50%' : '0')};
  width: 50%;
  height: 100%;
  background-color: ${colors.green};
  border-radius: 50px;
  transition: left 0.5s ease;
  z-index: 1;
`;

export const ToggleButton = styled.button`
  flex: 1;
  background-color: transparent;
  color: ${(props) => (props.active ? colors.white : colors.gray)};
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  margin: 0;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 2;
  position: relative;

  &:hover {
    color: ${(props) => (props.active ? colors.white : colors.black)};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MoaImage = styled.img`
  width: 8dvw;
  height: 8dvh;
  margin-left: 5px;
`;

// 추가된 모달 관련 스타일
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  width: 60%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const ModalBrand = styled.div`
  font-weight: bold;
  font-size: 1.7rem;
  margin-bottom: 10px;
  margin-top: -1dvh;
`;

export const ModalName = styled.div`
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

export const ModalPriceWrapper = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4dvh;
  margin-left: -4dvw;
`;

// export const ModalButtonWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// `;
export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* 버튼들을 왼쪽 정렬 */
  margin-top: 20px;

  button {
    margin-right: 20px; /* 버튼 간의 간격을 설정 (마지막 버튼은 제외하려면 nth-child 등을 사용) */
  }

  button:last-child {
    margin-right: 0; /* 마지막 버튼은 간격 제거 */
  }
`;

export const CloseButton = styled.button`
  background-color: ${colors.gray};
  // width: 30dvw;
  color: ${colors.white};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.light_green};
  }
`;

export const MoaImageinModal = styled.img`
  width: 12dvw; /* 원하는 크기로 조정 */
  height: 8dvh;
  margin-right: 1dvw; /* 가격과 이미지 사이의 간격 */
`;

export const LoadMoreTrigger = styled.div`
  border: 1px solid transparent;
`;

export const WishWrapWrap = styled.div`
  margin-bottom: 40px;
`;
