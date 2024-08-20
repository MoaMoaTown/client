import styled, { css } from 'styled-components';

const buttonStyles = {
  whiteBtn: css`
    width: 5vw;
    background: white;
  `,
};

export const StyledButton = styled.button`
  ${({ theme }) => buttonStyles[theme]}
`;
