import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledJobButton = styled.button`
  width: 100%;
  margin-bottom: 2.5dvh;
  padding: 0 6%;
  height: 7dvh;
  font-size: 1.2rem;
  font-weight: bold;
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
    white-space: nowrap; /* 텍스트를 한 줄로 유지 */
    overflow: hidden; /* 넘치는 부분 숨김 */
    text-overflow: ellipsis; /* 넘칠 때 '...' 표시 */
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

export const ListWrapper = styled.div`
  // width: 100%;
`;

export const LoadMoreTrigger = styled.div`
  border: 1px solid transparent;
`;
export const LoadingText = styled.div``;
