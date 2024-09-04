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

const ClickableTable = ({ headers, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedRowData(null);
  };

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
                    onClick={() => handleRowClick(row)}
                    style={{ cursor: 'pointer' }}
                  >
                    {Object.values(row).map((cell, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        align={cellIndex === 1 ? 'left' : 'center'}
                      >
                        {cell.type === 'text' ? cell.value : null}
                      </Cell>
                    ))}
                  </tr>
                ))}
              </Tbody>
            </Table>
          </TableWrapper>

          {/* 모달이 열려있을 경우 모달을 렌더링 */}
          {/* {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={handleClose}>

            </Modal>
          )} */}
        </>
      ) : (
        <EmptyWrapper>
          <EmptyMsg>퀘스트가 없습니다.</EmptyMsg>
        </EmptyWrapper>
      )}
    </Container>
  );
};

export default ClickableTable;
