import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  margin-left: 4vw;
  border-radius: 10px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0vh 1vw;
  img {
    width: 1.6vw;
    height: 1.6vw;
  }
`;

export const TitleWrapper = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vw 0vw;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  margin-right: 3.6vw;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  white-space: pre-line;
  margin-bottom: 1vw;
  color: ${colors.dark_gray};
`;

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
  width: 60%;
  max-height: 25vh;
  position: relative;
  margin-top: 2vh;
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
  text-align: center;
  vertical-align: middle;
`;

export const StatusCell = styled.td`
  height: 2vw;
  padding: 0.8vh 0.8vw;
  border-bottom: 1px solid ${colors.dark_gray};
  font-size: 1rem;
  text-align: center;
  vertical-align: middle;
  color: ${(props) =>
    props.status === 1
      ? colors.green
      : props.status === 2
      ? colors.orange
      : 'black'};
  text-decoration: ${(props) => (props.status !== 3 ? 'underline' : 'none')};
  cursor: ${(props) => (props.status !== 3 ? 'pointer' : 'default')};
  font-weight: ${(props) => (props.status !== 3 ? 'bold' : 'regular')};
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
  align-items: center;
  justify-content: center;
`;

export const PageButton = styled.button`
  background-color: transparent;
  color: ${({ active }) => (active ? 'black' : `${colors.dark_gray}`)};
  border: none;
  padding: 2vh 1vw;
  font-size: 1rem;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

  &:hover {
    color: black;
  }
`;

export const PageNumber = styled.div`
  font-size: 1rem;
  text-align: center;
`;
