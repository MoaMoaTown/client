import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84dvw;
  height: 92dvh;
  padding: 4dvh 8dvw;
`;

export const BackButton = styled.img`
  position: absolute;
  top: 8dvh;
  left: 8dvw;
  background: none;
  border: none;
  width: 8dvw;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  margin-bottom: 10dvh;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 70dvw;
  padding: 5dvh 5dvw;
  position: relative;
  z-index: 1;
`;

export const Ear = styled.div`
  position: absolute;
  width: 8dvw;
  height: 16dvw;
  background-color: black;
  border-radius: 50%;
  top: -4dvh;
  z-index: 0;
  ${({ left }) => left && 'left: 6dvw;'}
  ${({ right }) => right && 'left: 20dvw;'}
`;

export const CardImage = styled.img`
  width: 20dvw;
  height: auto;
  object-fit: contain;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  white-space: pre-line;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${colors.dark_gray};
`;

export const FooterText = styled.div`
  font-size: 1rem;
  color: ${colors.gray};
  text-decoration: underline;
`;
