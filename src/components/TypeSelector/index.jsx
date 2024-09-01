import React, { useState } from 'react';
import { Button } from '../../components';
import { TypeSelectorWrapper } from './styled';
import faceIcon from '../../assets/images/face_icon.png';
import topIcon from '../../assets/images/top_icon.png';
import bottomIcon from '../../assets/images/bottom_icon.png';

/**
 * 아이템 타입 선택 메뉴
 * @author 임원정
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  	임원정        최초 생성
 * 2024.09.01   임원정        recoil 사용하도록 변경
 * </pre>
 */

const TypeSelector = ({ selectedType, setSelectedType }) => {
  const [activeType, setActiveType] = useState(selectedType);

  const handleTypeClick = (type) => {
    setActiveType(type);
    setSelectedType(type);
  };

  return (
    <TypeSelectorWrapper>
      <Button
        variant='typeBtn'
        active={activeType === 0}
        onClick={() => handleTypeClick(0)}
      >
        <img src={faceIcon} alt='얼굴' />
        얼굴
      </Button>
      <Button
        variant='typeBtn'
        active={activeType === 1}
        onClick={() => handleTypeClick(1)}
      >
        <img src={topIcon} alt='상의' />
        상의
      </Button>
      <Button
        variant='typeBtn'
        active={activeType === 2}
        onClick={() => handleTypeClick(2)}
      >
        <img src={bottomIcon} alt='하의' />
        하의
      </Button>
    </TypeSelectorWrapper>
  );
};

export default TypeSelector;
