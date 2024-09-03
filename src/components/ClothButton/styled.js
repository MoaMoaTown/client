import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 90%;
  height: 18dvh;
  padding: 2.13vh 5%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border: 1px solid ${colors.gray};
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;

  &:hover {
    background-color: ${colors.super_light_green};
  }

  &:active {
    background-color: ${colors.dark_gray};
  }

  &:disabled {
    background-color: ${colors.gray};
    cursor: not-allowed;
  }
`;

export const ClothImage = styled.img`
  height: auto;
  object-fit: contain;
  flex: 1;
  width: 15dvw;
`;

export const InfoWrapper = styled.div`
  text-align: left;
  margin-left: 16px;
  flex: 3;
  overflow: hidden; /* 넘치는 내용을 숨기기 */
`;

export const Brand = styled.div`
  font-weight: bold;
  font-size: 1.2rem; /* 글씨 크기 키움 */
  white-space: nowrap; /* 한 줄로 표시 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  text-overflow: ellipsis; /* 넘치는 부분을 생략 표시 */
`;

export const Name = styled.div`
  width: 100%; /* 부모 요소에 맞게 확장 */
  margin-top: 4px;
  font-size: 1.1rem; /* 글씨 크기 키움 */
  white-space: nowrap; /* 한 줄로 표시 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  text-overflow: ellipsis; /* 넘치는 부분을 생략 표시 */
`;

export const Price = styled.div`
  margin-top: 4px;
  font-size: 1.3rem;
  display: flex;
  align-items: center; /* 텍스트와 이미지를 수평으로 정렬 */
`;

export const MoaImage = styled.img`
  width: 8dvw; /* 작게 설정 */
  margin-left: 4px; /* 텍스트와 이미지 사이의 간격 */
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
