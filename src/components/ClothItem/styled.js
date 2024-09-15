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
  align-items: center;
  cursor: pointer;
  gap: 0.5dvh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ItemImage = styled.img`
  width: 15dvw;
  height: 15dvw;
  object-fit: contain;
`;

export const ItemBrand = styled.div`
  width: 22dvw;
  text-align: left;
  font-size: 0.7rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 0.2dvh;
`;

export const ItemName = styled.div`
  width: 22dvw;
  text-align: left;
  font-size: 0.7rem;
  font-weight: regular;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
