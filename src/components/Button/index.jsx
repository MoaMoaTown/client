import React from 'react';
import { StyledButton } from './styled';

const Button = ({ theme, onClick, children, disabled, type = 'button' }) => {
  return (
    <StyledButton
      type={type}
      theme={theme}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
