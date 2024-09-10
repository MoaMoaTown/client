import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 90%;
  height: 18dvh;
  padding: 1.9vh 5%;

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
  overflow: hidden;
`;

export const Brand = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled.div`
  width: 100%;
  margin-top: 4px;
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  margin-top: 4px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const MoaImage = styled.img`
  width: 8dvw;
  margin-left: 4px;
`;

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
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 90%;
  max-height: 90%;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const ModalPriceWrapper = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
