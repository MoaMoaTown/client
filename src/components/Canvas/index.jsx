import React from 'react';
import { CanvasContainer, Character } from './styled';

const Canvas = ({ heendy, currentClothes }) => {
  return (
    <CanvasContainer id="canvas">
      <Character>
        <img src={heendy} alt="Heendy Character" />
        {currentClothes && <img src={currentClothes} alt="Current Clothes" />}
      </Character>
    </CanvasContainer>
  );
};

export default Canvas;
