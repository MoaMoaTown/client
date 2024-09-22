import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledInput = styled.input`
  width: 62dvw;
  height: 8dvh;
  font-size: 1rem;
  border: 1px solid ${colors.gray};
  border-radius: 10px;
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
  @media (min-width: 1024px) {
    width: 15vw;
    height: 7vh;
    font-size: 0.8rem;
    padding-left: 1.5vw;
  }
`;
