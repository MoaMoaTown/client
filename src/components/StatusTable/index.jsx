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

/**
 * 현황 테이블 컴포넌트
 * @author 임원정
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03 	임원정        최초 생성
 * </pre>
 */

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
