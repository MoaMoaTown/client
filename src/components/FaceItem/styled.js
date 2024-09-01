import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 24dvw;
  height: 24dvw;
  padding: 1dvh 1dvw;
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgba(30, 157, 139, 0.2)' : 'white'};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ItemImage = styled.img`
  width: 15dvw;
  height: auto;
  object-fit: cover;
`;
