import React from 'react';
import { Button } from '../../components';
import { TypeSelectorWrapper } from './styled';
import faceIcon from '../../assets/images/face_icon.png';
import topIcon from '../../assets/images/top_icon.png';
import bottomIcon from '../../assets/images/bottom_icon.png';

const TypeSelector = ({ selectedType, onSelectType }) => {
    return (
      <TypeSelectorWrapper>
        <Button
            variant="typeBtn"
            active={selectedType === 0}
            onClick={() => onSelectType(0)}
        >
          <img src={faceIcon} alt="얼굴" />
          얼굴
        </Button>
        <Button
            variant="typeBtn"
            active={selectedType === 1}
            onClick={() => onSelectType(1)}
        >
            <img src={topIcon} alt="상의" />
          상의
        </Button>
        <Button
            variant="typeBtn"
            active={selectedType === 2}
            onClick={() => onSelectType(2)}
        >
            <img src={bottomIcon} alt="하의" />
          하의
        </Button>
      </TypeSelectorWrapper>
    );
  };
  
  export default TypeSelector;
