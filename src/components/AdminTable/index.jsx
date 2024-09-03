import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Cell,
  EmptyWrapper,
  EmptyMsg,
  ActionButton,
} from './styled';

/**
 * 관리자 페이지 테이블 컴포넌트
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

const AdminTable = ({ headers, data, emptyMessage }) => {
  return (
    <Container>
      {data.length > 0 ? (
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
                      align={
                        cellIndex === 1 || cellIndex === 2 ? 'left' : 'center'
                      }
                    >
                      {cell.type === 'text' ? (
                        cell.value
                      ) : cell.type === 'button' ? (
                        <ActionButton onClick={cell.onClick}>
                          {cell.value}
                        </ActionButton>
                      ) : null}
                    </Cell>
                  ))}
                </tr>
              ))}
            </Tbody>
          </Table>
        </TableWrapper>
      ) : (
        <EmptyWrapper>
          <EmptyMsg>{emptyMessage}</EmptyMsg>
        </EmptyWrapper>
      )}
    </Container>
  );
};

AdminTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyMessage: PropTypes.string,
};

export default AdminTable;
