import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { fetchProfile } from '../../apis/closetApi';
import heendy from '../../assets/images/default_heendy.png';
import paw from '../../assets/images/paw.png';
import { Button, Header, Loading } from '../../components';
import { loginInfo } from '../../store/atoms';
import {
  Container,
  Paw,
  PawWrapper,
  ProfileImage,
  SubTitle,
  Title,
  Username,
} from './styled';

/**
 * 옷장 진입 페이지
 * @author 임원정
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  	임원정        최초 생성
 * 2024.09.07   임원정        프로필 이미지 생성 전 기본 이미지 적용 및 디자인 수정
 * </pre>
 */

const ClosetEntry = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(loginInfo);
  const { data: profile, isLoading } = useQuery('profile', fetchProfile);

  const handleEntry = () => {
    navigate('/closet');
  };

  if (isLoading) {
    return (
      <Container>
        <Loading text={'로딩 중...'} />
      </Container>
    );
  }

  const imageUrl =
    profile && profile.encodedProfileImage
      ? profile.encodedProfileImage
      : heendy;

  return (
    <Container>
      <Header />
      <Title>나의 옷장</Title>
      <SubTitle>현재 프로필</SubTitle>
      <ProfileImage src={imageUrl} alt='프로필 이미지' />
      <PawWrapper>
        <Paw src={paw} />
        <Paw src={paw} />
      </PawWrapper>
      <Username>{user.nickname}</Username>
      <Button variant='entryBtn' onClick={handleEntry}>
        흰디 꾸미기
      </Button>
    </Container>
  );
};

export default ClosetEntry;
