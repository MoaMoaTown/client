import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

const buttonStyles = {
  signupBtn: css`
    width: 45dvw;
    height: 5dvh;
    background-color: ${colors.orange};
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;

    &:disabled {
      background-color: ${colors.gray};
      cursor: not-allowed;
      color: white;
    }
  `,
  loginBtn: css`
    width: 45dvw;
    height: 5dvh;
    background-color: ${colors.green};
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;

    &:disabled {
      background-color: ${colors.gray};
      cursor: not-allowed;
      color: white;
    }
  `,
  joinBtn: css`
    width: 45dvw;
    height: 5dvh;
    background-color: white;
    color: black;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    margin-top: 2dvh;

    &:disabled {
      cursor: not-allowed;
      color: ${colors.gray};
    }
  `,
  buyBtn: css`
    width: 100%;
    height: 5dvh;
    background-color: ${colors.green};
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;

    &:disabled {
      background-color: ${colors.gray};
      cursor: not-allowed;
      color: white;
    }
  `,
};

export const StyledButton = styled.button`
  ${({ variant }) => buttonStyles[variant]}
`;
