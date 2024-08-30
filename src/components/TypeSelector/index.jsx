import React from 'react';
import { TypeSelectorWrapper, TypeButton } from './styled';

const TypeSelector = ({ selectedType, onSelectType }) => {
  return (
    <TypeSelectorWrapper>
      <TypeButton active={selectedType === 0} onClick={() => onSelectType(0)}>얼굴</TypeButton>
      <TypeButton active={selectedType === 1} onClick={() => onSelectType(1)}>상의</TypeButton>
      <TypeButton active={selectedType === 2} onClick={() => onSelectType(2)}>하의</TypeButton>
    </TypeSelectorWrapper>
  );
};

export default TypeSelector;
