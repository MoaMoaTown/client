import styled from 'styled-components';

export const CanvasContainer = styled.div`
  position: relative;
  width: 80dvw;
  height: 80dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;

export const Character = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 70%;
    height: auto;
  }
`;

export const Clothes = styled.img`
  position: absolute;
  z-index: 10;
  pointer-events: none;  /* 옷을 클릭해도 캔버스가 반응하지 않도록 설정 */
`;
