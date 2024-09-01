import React from 'react';
import { StyledWishButton, PriceWrapper, MoaImage } from './styled';
import moaImage from '../../assets/images/moa.svg';

const WishButton = ({ children, price, onClick, ...rest }) => {
  return (
    <StyledWishButton onClick={onClick} {...rest}>
      <span>{children}</span>
      <PriceWrapper>
        {price}
        <MoaImage src={moaImage} alt='Moa' />
      </PriceWrapper>
    </StyledWishButton>
  );
};

export default WishButton;
