import React from 'react';
import { StyledButton } from './styled';

const Button = ({ variant, onClick, children, disabled, type = 'button' }) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
