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
  width: 80%;
  max-width: 400px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  padding: 4dvw;
`;

export const TitleText = styled.h2`
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const MessageText = styled.p`
  font-size: 1rem;
  color: ${colors.dark_gray};
  margin: 3dvh 0dvw;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 8dvw;
`;

export const ProfileImagePreview = styled.img`
  width: 60%;
  height: auto;
  border-radius: 8px;
  margin: 4dvw;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
