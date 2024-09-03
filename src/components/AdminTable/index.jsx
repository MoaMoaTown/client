import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Cell,
  EmptyWrapper,
  EmptyMsg,
  EmptyImg,
} from './styled';

const AdminTable = ({ headers, data, emptyMessage, emptyImage }) => {
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
                      {cell}
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
          {emptyImage && <EmptyImg src={emptyImage} alt='Empty' />}
        </EmptyWrapper>
      )}
    </Container>
  );
};

AdminTable.propTypes = {
  title: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyMessage: PropTypes.string,
  emptyImage: PropTypes.string,
};

AdminTable.defaultProps = {
  emptyMessage: '데이터가 없습니다.',
  emptyImage: null,
};

export default AdminTable;
