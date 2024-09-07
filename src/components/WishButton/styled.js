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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px;
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
