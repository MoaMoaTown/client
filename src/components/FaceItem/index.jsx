import React from 'react';
import { ItemContainer, ItemImage } from './styled';

/**
 * 얼굴 아이템
 * @author 임원정
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  	임원정        최초 생성
 * </pre>
 */

const FaceItem = ({ item, onClick, isSelected }) => {
  return (
    <ItemContainer onClick={onClick} isSelected={isSelected}>
      <ItemImage src={item.imgUrl} alt='Face' />
    </ItemContainer>
  );
};

export default FaceItem;
