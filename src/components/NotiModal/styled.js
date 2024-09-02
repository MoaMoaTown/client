import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Container = styled.div`
  width: 84dvw;
  height: 50dvh;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  padding: 1dvh 4dvw;
  width: 90%;
  height: 90%;
  overflow-y: auto;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
  text-align: center;
  margin-right: 20dvw;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: ${colors.background_gray};
  }
`;

export const Cell = styled.td`
  padding: 2dvw;
  border-bottom: 1px solid #ddd;
  font-size: 0.8rem;
  text-align: left;
  vertical-align: middle;
`;

export const Thead = styled.th`
  font-size: 0.8rem;
  text-align: center;
  padding: 2dvw;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  vertical-align: middle;
`;

export const CloseIcon = styled.img`
  width: 7dvw;
  height: auto;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1dvw;
`;
