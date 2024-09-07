import React from 'react';
import { Header, JobInfo, PassbookDetail } from '../../components';

import { Container } from './styled';

/**
 * 통장 거래 내역 조회 페이지
 * @author 이주현
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  이주현      최초 생성
 * </pre>
 */

const Account = () => {
  return (
    <Container>
      <Header />
      <JobInfo />
      <PassbookDetail />
    </Container>
  );
};
export default Account;
