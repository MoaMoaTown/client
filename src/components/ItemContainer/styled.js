import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 84dvw;
  height: 100%;
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'grid')};
  flex-wrap: wrap;
  gap: 3dvw;
  margin-top: 2.8dvh;
  padding: 1dvh 1dvw;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
  align-items: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
  height: ${({ isLoading }) => (isLoading ? '50dvh' : 'auto')};

  ${({ isLoading }) =>
    !isLoading &&
    `
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
  `}

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

export const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const EmptyMsg = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 8dvh;
`;

export const EmptyImg = styled.img`
  width: 28dvw;
  height: auto;
  margin-top: 8dvh;
`;
