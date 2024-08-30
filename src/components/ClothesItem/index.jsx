import React from 'react';
import { ItemContainer, ItemImage, ItemBrand, ItemName } from './styled';

const ClothesItem = ({ item, onClick }) => {
  return (
    <ItemContainer onClick={() => onClick(item.imgUrl)}>
      <ItemImage src={item.imgUrl} alt={item.name} />
      <ItemBrand>{`[${item.brand}]`}</ItemBrand>
      <ItemName>{`${item.name}`}</ItemName>
    </ItemContainer>
  );
};

export default ClothesItem;