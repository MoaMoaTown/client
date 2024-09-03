import React from 'react';
import {
  Container,
  Title,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Cell,
} from './styled';

const StatusTable = ({ title, headers, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <Thead key={index}>{header}</Thead>
              ))}
            </tr>
          </thead>
          <Tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    align={cellIndex === 1 ? 'left' : 'center'}
                  >
                    {cell}
                  </Cell>
                ))}
              </tr>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default StatusTable;
