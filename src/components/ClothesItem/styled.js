import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 20dvw;
  height: 30dvw;
  padding: 2dvw;
  background-color: #f4f4f4;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ItemImage = styled.img`
  width: 15dvw;
  height: 15dvw;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const ItemBrand = styled.div`
  text-align: left;
  font-size: 0.7rem;
  font-weight: bold;
`;

export const ItemName = styled.div`
  text-align: left;
  font-size: 0.7rem;
  font-weight: regular;
`;
