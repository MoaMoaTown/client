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
  z-index: 1000;
`;

export const Container = styled.div`
  width: 28vw;
  height: 44vh;
  background-color: ${colors.background_gray};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const TitleWrapper = styled.div`
  width: 84%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-right: 6vw;
`;

export const CloseIcon = styled.img`
  width: 2dvw;
  height: auto;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  width: 84%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 2vh;
  margin-bottom: 1vh;
`;

export const Input = styled.input`
  padding: 1vw;
  font-size: 1rem;
  border-radius: 30px;
  border: 1px solid ${colors.gray};
  outline: none;
`;

export const PayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vh;
`;

export const MoaImage = styled.img`
  width: 3vw;
  height: 3vw;
`;

export const PayInput = styled.input`
  width: 40%;
  height: 1vw;
  padding: 1vw;
  font-size: 1rem;
  border-radius: 30px;
  border: 1px solid ${colors.gray};
  outline: none;
  margin-right: 1vw;
`;
