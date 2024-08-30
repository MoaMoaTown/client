import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledButton = styled.button`
  width: 62dvw;
  height: 12dvh;
  font-size: 1rem;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  background-color: ${colors.primary}; // 기본 배경색 (예: primary 색상)
  color: white; // 기본 텍스트 색상
  cursor: pointer;

  //   &:hover {
  //     background-color: ${colors.primary_dark}; // 호버 시 배경색
  //   }

  //   &:active {
  //     background-color: ${colors.primary_darker}; // 클릭 시 배경색
  //   }

  &:hover {
    background-color: ${colors.gray}; // 호버 시 배경색
  }

  &:active {
    background-color: ${colors.dark_gray}; // 클릭 시 배경색
  }
  &:disabled {
    background-color: ${colors.gray};
    cursor: not-allowed;
  }
`;
