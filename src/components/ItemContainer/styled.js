import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 88dvw;
  display: flex;
  flex-wrap: wrap;
  gap: 4dvw;
  padding: 1dvh 1dvw;
  overflow-x: auto;
  justify-content: flex-start;
  align-items: flex-start;
  scrollbar-width: thin;
  scrollbar-color: #888 #f4f4f4;
  &::-webkit-scrollbar {
    height: 4dvh;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
`;
