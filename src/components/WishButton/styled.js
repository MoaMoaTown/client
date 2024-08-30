// components/WishButton/styled.js
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledWishButton = styled.button`
  width: 62dvw;
  height: 8dvh;
  font-size: 1rem;
  //   border: 2px dashed ${colors.dark_gray}; // 다른 스타일 (예: dashed 테두리)
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  background-color: ${colors.light_gray}; // 위시리스트 버튼용 배경색
  color: ${colors.dark_gray}; // 위시리스트 버튼용 텍스트 색상
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray}; // 호버 시 배경색
  }

  &:active {
    background-color: ${colors.dark_gray}; // 클릭 시 배경색
  }

  &:disabled {
    background-color: ${colors.light_gray};
    cursor: not-allowed;
  }
`;
