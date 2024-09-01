import React from 'react';
import {
  Container,
  ClothImage,
  InfoWrapper,
  Brand,
  Name,
  Price,
  MoaImage,
} from './styled';
import moaImage from '../../assets/images/moa.svg';

const ClothButton = ({ imgUrl, name, brand, price, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ClothImage src={imgUrl} alt={name} />
      <InfoWrapper>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>
          {price}
          <MoaImage src={moaImage} alt='Moa' />
        </Price>
      </InfoWrapper>
    </Container>
  );
};

export default ClothButton;
