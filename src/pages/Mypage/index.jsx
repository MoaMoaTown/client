import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, JobInfo, Passbook } from '../../components';

import { Container, ClosetTitle, ClosetImage } from './styled';
import closet from '../../assets/images/closet.svg';

const Mypage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <JobInfo />
      <Passbook />
      <ClosetTitle>나의 옷장</ClosetTitle>
      <ClosetImage src={closet} />
    </Container>
  );
};

export default Mypage;
