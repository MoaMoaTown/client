import styled from 'styled-components';
import { colors } from '../../styles/colors';

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
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 80dvw;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.h2`
  font-size: 1.5rem;
  color: ${colors.primary};
  margin-bottom: 10px;
`;

export const DescriptionText = styled.p`
  font-size: 1.4rem;
  color: ${colors.dark_gray};
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 1.3rem;
  border-radius: 5px;
  border: 1px solid ${colors.gray};
  resize: none;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &.cancelBtn {
    background-color: ${colors.light_gray};
    color: ${colors.dark_gray};
    border: 1px solid ${colors.gray};
  }

  &.confirmBtn {
    background-color: ${colors.primary};
    color: white;
    border: none;
  }
`;

export const PayText = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1dvh;
  font-size: 1.2rem;
  margin-bottom: 2dvh;
  color: black;

  img {
    vertical-align: middle;
  }
`;
