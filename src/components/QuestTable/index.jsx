import React, { useState } from 'react';
import {
  Container,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Cell,
  EmptyWrapper,
  EmptyMsg,
} from './styled';

/**
 * 퀘스트 테이블 컴포넌트
 * @author 임원정
 * @since 2024.09.04
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.04 	임원정        최초 생성
 * </pre>
 */

const QuestTable = ({ headers, data, onRowClick }) => {
  return (
    <Container>
      {data.length > 0 ? (
        <>
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
                  <tr
                    key={rowIndex}
                    onClick={() => onRowClick(row)}
                    style={{ cursor: 'pointer' }}
                  >
                    {Object.values(row).map(
                      (cell, cellIndex) =>
                        cellIndex !== Object.values(row).length - 1 && ( // questId는 제외하고 렌더링
                          <Cell
                            key={cellIndex}
                            align={cellIndex === 1 ? 'left' : 'center'}
                          >
                            {cell}
                          </Cell>
                        )
                    )}
                  </tr>
                ))}
              </Tbody>
            </Table>
          </TableWrapper>
        </>
      ) : (
        <EmptyWrapper>
          <EmptyMsg>퀘스트가 없습니다.</EmptyMsg>
        </EmptyWrapper>
      )}
    </Container>
  );
};

export default QuestTable;
