import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

export const BubbleContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 180px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;

export const BubbleContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 80%;
`;

export const BubbleTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.black};
`;

export const BubbleText = styled.p`
  font-size: 1rem;
  color: ${colors.gray};
  white-space: pre-wrap;
  line-height: 1.1;
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary_dark};
  }
`;

export const BubbleArrow = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid white;
  z-index: 100;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
