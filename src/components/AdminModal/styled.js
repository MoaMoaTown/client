import styled from 'styled-components';

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
  width: 20vw;
  height: 20vh;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  width: 100%;
  height: auto;
`;

export const TitleText = styled.h2`
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  gap: 2vw;
`;
