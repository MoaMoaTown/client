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
