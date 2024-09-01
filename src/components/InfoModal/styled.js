import styled from 'styled-components';
import { colors } from '../../styles/colors';
import bg from '../../assets/images/cupid.png';

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

export const MessageText = styled.p`
  font-size: 1.2rem;
  color: ${colors.dark_gray};
  margin-bottom: 3dvh;
`;
