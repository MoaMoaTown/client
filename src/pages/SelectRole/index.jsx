import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  FooterText,
  CardTextWrapper,
  Ear,
  CardWrapper,
  BackButton,
} from './styled';

import back from '../../assets/images/back.svg';
import heendy from '../../assets/images/heendy.png';

/**
 * 회원 가입 전 역할 선택 페이지
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

const SelectRole = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate('/signup', { state: { role } });
  };

  return (
    <Container>
      <BackButton src={back} onClick={() => navigate(-1)} />
      <CardWrapper onClick={() => handleRoleSelection(1)}>
        <Ear left />
        <Ear right />
        <Card>
          <CardImage src={heendy} alt='heendy' />
          <CardTextWrapper>
            <CardTitle>{`타운을 
            운영하고 관리해요.`}</CardTitle>
            <CardDescription>시장 &gt;</CardDescription>
          </CardTextWrapper>
        </Card>
      </CardWrapper>
      <CardWrapper onClick={() => handleRoleSelection(0)}>
        <Ear left />
        <Ear right />
        <Card>
          <CardImage src={heendy} alt='heendy' />
          <CardTextWrapper>
            <CardTitle>타운 내 경제 활동에 참여하고 싶어요.</CardTitle>
            <CardDescription>시민 &gt;</CardDescription>
          </CardTextWrapper>
        </Card>
      </CardWrapper>
      <FooterText onClick={() => navigate('/login')}>
        이미 모아모아타운 회원이신가요?
      </FooterText>
    </Container>
  );
};

export default SelectRole;
