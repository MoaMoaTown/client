import React from 'react';
import { Header, JobInfo, PassbookDetail } from '../../components';

import { Container } from './styled';

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
