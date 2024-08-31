import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 90%;
  height: 18dvh;
  padding: 2dvh 5%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border: 1px solid ${colors.gray};
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray};
  }

  &:active {
    background-color: ${colors.dark_gray};
  }

  &:disabled {
    background-color: ${colors.gray};
    cursor: not-allowed;
  }
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
`;

export const Brand = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const Name = styled.div`
  width: 100%;
  margin-top: 4px;
  font-size: 0.8em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  margin-top: 4px;
  font-size: 0.9em;
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
