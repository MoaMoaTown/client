import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledWishButton = styled.button`
  width: 67dvw;
  height: 8dvh;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1.6dvh 5%;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  background-color: white;
  color: ${colors.dark_gray};
  cursor: pointer;
  display: flex; /* Flexbox로 변경 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: space-between; /* 양 끝으로 정렬 */

  &:hover {
    background-color: ${colors.super_light_green};
  }

  &:active {
    background-color: ${colors.dark_gray};
  }

  &:disabled {
    background-color: ${colors.light_gray};
    cursor: not-allowed;
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // flex-grow: 1; /* 텍스트 영역이 가능한 공간을 차지하도록 */
    margin-right: 10px; /* 가격과 텍스트 사이의 간격 */
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

export const MoaImage = styled.img`
  width: 4dvh; /* 작게 설정 */
  // height: 12px; /* 작게 설정 */
  margin-left: 4px; /* 텍스트와 이미지 사이의 간격 */
`;
