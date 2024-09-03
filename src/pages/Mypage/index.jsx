import React from 'react';
import { Link } from 'react-router-dom';
import { Header, JobInfo, Passbook } from '../../components';

import { Container, ClosetTitle, ClosetImage } from './styled';
import closet from '../../assets/images/closet.svg';

const Mypage = () => {
  return (
    <Container>
      <Header />
      <JobInfo />
      <Link to='/account'>
        <Passbook />
      </Link>
      <ClosetTitle>나의 옷장</ClosetTitle>
      <Link to='/closet-entry'>
        <ClosetImage src={closet} />
      </Link>
    </Container>
  );
};

export default Mypage;
