import React from 'react';
import { StyledButton } from './styled';

const ClothButton = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};
export default ClothButton;