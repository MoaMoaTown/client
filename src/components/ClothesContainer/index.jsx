import React from 'react';
import { useQuery } from 'react-query';
import { ClothesContainerWrapper } from './styled';
import { fetchMyclothes } from '../../apis/closetApi';
import ClothesItem from '../ClothesItem';

const ClothesContainer = ({ selectedType, onSelectClothes }) => {
  const { data, isLoading, isError } = useQuery(
    ['myclothes', selectedType],
    () => fetchMyclothes(selectedType)
  );

  // 데이터가 없을 경우 처리
  if (!data || data.length === 0) {
    return <div>가진 옷이 없습니다.</div>;
  }

  return (
    <ClothesContainerWrapper>
      {data.map((item) => (
        <ClothesItem key={item.clothId} item={item} onClick={onSelectClothes} />
      ))}
    </ClothesContainerWrapper>
  );
};

export default ClothesContainer;