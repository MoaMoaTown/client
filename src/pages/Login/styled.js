import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background_gray};

  @media (max-width: 1024px) {
    padding: 0;
    background-color: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 25dvh;
  width: 100dvw;
  height: 75dvh;
  position: relative;
  overflow: hidden;
  @media (min-width: 1024px) {
    width: 25vw;
    height: 60vh;
    padding-top: 20vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: -3dvw;
  right: 10dvw;
  width: 60dvw;
  height: auto;
  object-fit: cover;
  @media (min-width: 1024px) {
    width: 60%;
    right: 10%;
    top: -3%;
    object-fit: contain;
  }
`;

export const Logo = styled.img`
  width: 68dvw;
  margin-bottom: 6dvh;
  @media (min-width: 1024px) {
    width: 15vw;
    margin-bottom: 2vw;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2dvh;
  text-align: center;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1vh;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2dvh;
  text-align: center;
  white-space: pre-line;
  color: ${colors.dark_gray};
  line-height: 1.5;
  @media (min-width: 1024px) {
    font-size: 0.8rem;
    margin-bottom: 2vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3dvh;
  width: 80dvw;
  max-width: 360px;
  @media (min-width: 1024px) {
    width: 100%;
    gap: 2.5vh;
  }
`;

export const SignUpText = styled.p`
  margin-top: 2dvh;
  font-size: 1rem;
  color: ${colors.gray};
  text-decoration: underline;
  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
`;
