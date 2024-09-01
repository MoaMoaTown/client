import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledWishButton = styled.button`
  width: 62dvw;
  height: 8dvh;
  font-size: 1rem;
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
    background-color: ${colors.gray};
  }

  &:active {
    background-color: ${colors.dark_gray};
  }

  &:disabled {
    background-color: ${colors.light_gray};
    cursor: not-allowed;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MoaImage = styled.img`
  width: 4dvh; /* 작게 설정 */
  // height: 12px; /* 작게 설정 */
  margin-left: 4px; /* 텍스트와 이미지 사이의 간격 */
`;
