import React, { forwardRef, useEffect } from 'react';
import { CanvasContainer, StyledCanvas } from './styled';

/**
 * 흰디 꾸미기 캔버스
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

const Canvas = forwardRef(({ heendy, face, clothes }, ref) => {
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    // 고해상도 설정
    const scaleFactor = 2;
    const width = canvas.offsetWidth * scaleFactor;
    const height = canvas.offsetHeight * scaleFactor;

    canvas.width = width;
    canvas.height = height;

    canvas.style.width = `${canvas.offsetWidth}px`;
    canvas.style.height = `${canvas.offsetHeight}px`;

    ctx.scale(scaleFactor, scaleFactor);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 몸 이미지 그리기
    const bodyImg = new Image();
    bodyImg.src = heendy;
    bodyImg.onload = () => {
      const bodyWidth = canvas.offsetWidth * 0.7;
      const bodyHeight = bodyImg.height * (bodyWidth / bodyImg.width);
      const bodyX = (canvas.offsetWidth - bodyWidth) / 2;
      const bodyY = canvas.offsetHeight - bodyHeight;

      ctx.drawImage(bodyImg, bodyX, bodyY, bodyWidth, bodyHeight);

      clothes
        .filter((item) => item.type === 2)
        .forEach((item) => {
          const clothesImg = new Image();
          clothesImg.crossOrigin = 'anonymous';
          clothesImg.src = item.url;
          clothesImg.onload = () => {
            const clothesWidth = bodyWidth * 0.48;
            const clothesHeight =
              clothesImg.height * (clothesWidth / clothesImg.width);
            const clothesX = bodyX + bodyWidth * 0.265;
            const clothesY = bodyY + bodyHeight * 0.35;

            ctx.drawImage(
              clothesImg,
              clothesX,
              clothesY,
              clothesWidth,
              clothesHeight
            );
          };
        });

      clothes
        .filter((item) => item.type === 1)
        .forEach((item) => {
          const clothesImg = new Image();
          clothesImg.crossOrigin = 'anonymous';
          clothesImg.src = item.url;
          clothesImg.onload = () => {
            const clothesWidth = bodyWidth * 0.55;
            const clothesHeight =
              clothesImg.height * (clothesWidth / clothesImg.width);
            const clothesX = bodyX + bodyWidth * 0.22;
            const clothesY = bodyY + bodyHeight * 0.05;

            ctx.drawImage(
              clothesImg,
              clothesX,
              clothesY,
              clothesWidth,
              clothesHeight
            );
          };
        });

      const faceImg = new Image();
      faceImg.src = face;
      faceImg.onload = () => {
        const faceWidth = canvas.offsetWidth * 0.3;
        const faceHeight = faceImg.height * (faceWidth / faceImg.width);
        const faceX = (canvas.offsetWidth - faceWidth) / 2;
        const faceY = bodyY - faceHeight * 0.7;

        ctx.drawImage(faceImg, faceX, faceY, faceWidth, faceHeight);
      };
    };
  }, [heendy, face, clothes, ref]);

  return (
    <CanvasContainer>
      <StyledCanvas id='canvas' ref={ref} />
    </CanvasContainer>
  );
});

export default Canvas;
