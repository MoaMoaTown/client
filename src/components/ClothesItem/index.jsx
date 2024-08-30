import React from 'react';
import { ItemContainer, ItemImage, ItemBrand, ItemName } from './styled';

const ClothesItem = ({ item, onClick }) => {
  const handleClick = () => {
    let clothesData = {
      url: item.imgUrl,
      width: '40%',  // 기본 크기 설정
      height: 'auto',
    };

    if (item.type === 1) {  // 상의 (type이 1인 경우)
      clothesData = {
        ...clothesData,
        top: '30%',  // 캐릭터 상반신 위치
        left: '30%',  // 위치 조정
      };
    } else if (item.type === 2) {  // 하의 (type이 2인 경우)
      clothesData = {
        ...clothesData,
        top: '50%',  // 캐릭터 하반신 위치
        left: '30%',  // 위치 조정
      };
    }

    onClick(clothesData);
  };

  return (
    <ItemContainer onClick={handleClick}>
      <ItemImage src={item.imgUrl} alt={item.name} />
      <ItemBrand>{`[${item.brand}]`}</ItemBrand>
      <ItemName>{`${item.name}`}</ItemName>
    </ItemContainer>
  );
};

export default ClothesItem;
