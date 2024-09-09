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
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

export const MoaImage = styled.img`
  width: 4dvh;
  margin-left: 4px;
`;

export const ListWrapper = styled.div``;

export const LoadMoreTrigger = styled.div`
  border: 1px solid transparent;
`;
export const LoadingText = styled.div``;
