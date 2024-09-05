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
  margin-left: 35%;
`;

export const TableWrapper = styled.div`
  width: 80%;
  max-height: 25vh;
  overflow-y: auto;
  position: relative;
  margin-top: 1.6vw;
  margin-bottom: 2vw;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

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
  justify-content: space-between;
`;

export const EmptyMsg = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 8vh;
`;

export const EmptyImg = styled.img`
  width: 8vw;
  height: auto;
  margin-top: 4vh;
`;

export const MoreIcon = styled.img`
  width: 2dvw;
  height: auto;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3vh;
  gap: 1vw;
`;
