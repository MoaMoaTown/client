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

export const TableWrapper = styled.div`
  width: 80%;
  max-height: 25vh;
  position: relative;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`;

export const Cell = styled.td`
  height: 2vw;
  padding: 0.8vh 0.8dvw;
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
  background-color: ${colors.table_orange};
`;

export const Tbody = styled.tbody`
  width: 100%;
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyMsg = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const ActionButton = styled.button`
  background-color: ${colors.table_orange};
  width: 3vw;
  height: 1.6vw;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${colors.gray};
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
`;

export const PageButton = styled.button`
  background-color: transparent;
  color: ${({ active }) => (active ? 'black' : `${colors.dark_gray}`)};
  border: none;
  padding: 1vh 0vw;
  margin: 0 0.5vw;
  font-size: 1rem;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

  &:hover {
    color: black;
  }
`;
