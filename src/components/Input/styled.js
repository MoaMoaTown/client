import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledInput = styled.input`
  width: 62dvw;
  height: 8dvh;
  font-size: 1rem;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  color: ${colors.dark_gray};
  padding-left: 6dvw;
  &::placeholder {
    color: ${colors.dark_gray};
  }

  &:focus {
    border-color: black;
  }
`;
