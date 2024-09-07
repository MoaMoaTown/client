import React from 'react';
import { Link } from 'react-router-dom';
import { Header, JobInfo, Passbook } from '../../components';

import { Container, ClosetTitle, ClosetImage } from './styled';
import closet from '../../assets/images/closet.png';

/**
 * 마이 페이지
 * @author 이주현
 * @since 2024.08.28
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.28  이주현      최초 생성
 * </pre>
 */

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
