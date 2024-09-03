import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 8px;
`;

export const Title = styled.div`
  font-size: 1.4rem;
  text-align: center;
  font-weight: bold;
  margin-top: 2vw;
`;

export const TableWrapper = styled.div`
  width: 80%;
  max-height: 25vh;
  overflow-y: auto;
  position: relative;
  margin-top: 1.6vw;
  margin-bottom: 2vw;

  &::-webkit-scrollbar {
    width: 0.4vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.dark_gray};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.background_gray};
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  thead {
    position: sticky;
    top: 0;
    background-color: #d59233;
    z-index: 1;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 25%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 50%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 25%;
  }
`;

export const Cell = styled.td`
  padding: 0.8dvw;
  border-bottom: 1px solid ${colors.dark_gray};
  font-size: 1rem;
  text-align: ${({ align }) => align};
  vertical-align: middle;
`;

export const Thead = styled.th`
  font-size: 1rem;
  text-align: center;
  padding: 0.8dvw;
  font-weight: bold;
  vertical-align: middle;
`;

export const Tbody = styled.tbody`
  width: 100%;
`;
