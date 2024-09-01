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
  const isSelected = selectedItems.includes(item.imgUrl);

  const handleClick = () => {
    const clothesData = {
      url: item.imgUrl,
      type: item.type,
    };
    onClick(clothesData);
  };

  return (
    <ItemContainer onClick={handleClick} isSelected={isSelected}>
      <ItemImage src={item.imgUrl} alt={item.name} />
      <ItemBrand>{`[${item.brand}]`}</ItemBrand>
      <ItemName>{`${item.name}`}</ItemName>
    </ItemContainer>
  );
};

export default ClothItem;
