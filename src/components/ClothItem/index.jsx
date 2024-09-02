import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedItemsState } from '../../store/atoms';
import { ItemContainer, ItemImage, ItemBrand, ItemName } from './styled';

/**
 * 옷 아이템
 * @author 임원정
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  	임원정        최초 생성
 * </pre>
 */

const ClothItem = ({ item, onClick }) => {
  const selectedItems = useRecoilValue(selectedItemsState);
  const isSelected = selectedItems.includes(item.clothId);
  console.log(item.id);
  console.log(selectedItems);

  const handleClick = () => {
    const clothesData = {
      id: item.clothId,
      image: item.image,
      type: item.type,
    };
    onClick(clothesData);
  };

  return (
    <ItemContainer onClick={handleClick} isSelected={isSelected}>
      <ItemImage src={item.image} alt={item.name} />
      <ItemBrand>{`[${item.brand}]`}</ItemBrand>
      <ItemName>{`${item.name}`}</ItemName>
    </ItemContainer>
  );
};

export default ClothItem;
