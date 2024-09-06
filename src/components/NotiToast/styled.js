import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../styles/colors';

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const ToastContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  bottom: 4dvh;
  left: 6dvw;
  background-color: white;
  color: black;
  padding: 1.4dvh 3.2dvw;
  border-radius: 8px;
  border: 1px solid ${colors.orange};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  gap: 1dvh;
  max-width: 53dvw;
  word-wrap: break-word;
  word-break: break-word;

  ${(props) =>
    props.show
      ? css`
          animation: ${slideInLeft} 1s ease forwards;
        `
      : css`
          animation: ${slideOutLeft} 1s ease forwards;
        `}

  @media (min-width: 1024px) {
    width: 20dvw;
    max-width: 40dvw;
    left: 2dvw;
    padding: 2dvh 1dvw;
    gap: 1dvh;
  }
`;

export const CloseIcon = styled.img`
  width: 5dvw;
  height: 5dvw;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 1.6vw;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    height: 1.6vw;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: black;
  font-weight: bold;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;
