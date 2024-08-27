import styled, { keyframes } from 'styled-components';

const animateLoader = keyframes`
  0% {
    transform: scale(1);
  }
  50%, 75% {
    transform: scale(2.5);
  }
  80%, 100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoadingContainer = styled.div`
  width: 10em;
  display: flex;
  justify-content: space-evenly;
`;

export const Circle = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
    background-color: ${(props) => props.color};
    animation: ${animateLoader} 2s ease-out infinite;
    animation-delay: ${(props) => props.delay};
  }
`;

export const Info = styled.p`
  font-size: 1rem;
  margin-top: 4dvh;
`;
