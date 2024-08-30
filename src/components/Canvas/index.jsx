import React, { useState, useEffect } from 'react';
import { CanvasContainer, Character, Clothes } from './styled';

const Canvas = ({ heendy, clothes, onImagesLoaded }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = clothes.length + 1; // 캐릭터 이미지 + 옷 이미지들

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      console.log("All images have loaded.");
      onImagesLoaded(); // 이미지가 모두 로드된 후 콜백 호출
    }
  }, [imagesLoaded, totalImages, onImagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded(prev => {
      const newCount = prev + 1;
      console.log(`Image loaded. Current count: ${newCount} of ${totalImages}`);
      return newCount;
    });
  };

  return (
    <CanvasContainer id="canvas">
      <Character>
        <img src={heendy} alt="Heendy Character" onLoad={handleImageLoad} />
        {clothes && clothes.map((item, index) => (
          <Clothes
            key={index}
            src={item.url}
            alt={`Clothes ${index}`}
            onLoad={handleImageLoad}
            style={{
              width: item.width,
              height: item.height,
              top: item.top,
              left: item.left,
            }}
          />
        ))}
      </Character>
    </CanvasContainer>
  );
};

export default Canvas;
