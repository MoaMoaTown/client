import React from 'react';
import {
  Container,
  ClothImage,
  InfoWrapper,
  Brand,
  Name,
  Price,
} from './styled';

const ClothButton = ({ imgUrl, name, brand, price, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ClothImage src={imgUrl} alt={name} />
      <InfoWrapper>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>{`${price}모아`}</Price>
      </InfoWrapper>
    </Container>
  );
};

export default ClothButton;
