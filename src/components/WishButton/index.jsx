import React from 'react';
import { StyledWishButton } from './styled';

const WishButton = ({ children, onClick, ...rest }) => {
  return (
    <StyledWishButton onClick={onClick} {...rest}>
      {children}
    </StyledWishButton>
  );
};

export default WishButton;
