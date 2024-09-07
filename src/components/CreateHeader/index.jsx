import React from 'react';
import { AdminModal, Button } from '../index';
import { Container, Title } from './styled';

/**
 * 관리자 페이지 만들기 헤더
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

const CreateHeader = ({ title, onCreate }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button variant='createBtn' onClick={onCreate}>
        만들기
      </Button>
      <AdminModal></AdminModal>
    </Container>
  );
};

export default CreateHeader;
