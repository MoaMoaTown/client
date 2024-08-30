import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledButton = styled.button`
  width: 62dvw;
  height: 28dvw;
  font-size: 1rem;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  background-color: ${colors.primary};
  color: black; /* 텍스트 색상 검정으로 변경 */
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray};
    color: black; /* 호버 시 텍스트 색상 검정 유지 */
  }

  &:active {
    background-color: ${colors.dark_gray};
    color: black; /* 활성화 시 텍스트 색상 검정 유지 */
  }

  &:disabled {
    background-color: ${colors.gray};
    color: black; /* 비활성화 시 텍스트 색상 검정 유지 */
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row; /* 가로 배치 */
  align-items: center;
  cursor: pointer;
  justify-content: space-between; /* 아이템 간의 간격을 조절 */
  color: black; /* 모든 자식 요소의 기본 텍스트 색상을 검정으로 설정 */
`;

// export const ImageWrapper = styled.div`
//   width: 40%; /* 이미지가 차지할 가로 크기 */
//   height: auto;
// `;

// export const ClothImage = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
// `;
export const ImageWrapper = styled.div`
  width: 15dvw; /* 고정된 가로 크기 */
  height: 15dvw; /* 고정된 세로 크기 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 이미지가 넘치지 않도록 설정 */
  margin-left: 10px; /* 왼쪽 마진 추가 */
`;

export const ClothImage = styled.img`
  width: 15dvw; /* 고정된 가로 크기 */
  height: 15dvw; /* 고정된 세로 크기 */
  object-fit: contain; /* 이미지가 잘리지 않도록 설정하고, 컨테이너에 맞게 축소 */
  object-position: center; /* 이미지의 중심을 기준으로 배치 */
`;

export const InfoWrapper = styled.div`
  text-align: left;
  margin-left: 16px;
  flex-grow: 1; /* 정보가 남은 공간을 채우도록 설정 */
  color: black; /* 텍스트 색상 검정으로 변경 */
`;

export const Brand = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: black; /* 텍스트 색상 검정으로 변경 */
`;

export const Name = styled.div`
  margin-top: 4px;
  font-size: 1em;
  color: black; /* 텍스트 색상 검정으로 변경 */
`;

export const Price = styled.div`
  margin-top: 4px;
  font-size: 0.9em;
  color: black; /* 텍스트 색상을 검정으로 변경 */
`;

export const Modal = styled.div`
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

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;
