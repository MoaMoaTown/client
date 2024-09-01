import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Header, Button } from '../../components';
import { fetchProfile } from '../../apis/closetApi';

import { Container, Title, ProfileImage } from './styled';

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
 * </pre>
 */

const ClosetEntry = () => {
  const navigate = useNavigate();

  const { data: profile, isLoading, isError } = useQuery('profile', fetchProfile, {
    onSuccess: () => {
      console.log('프로필 데이터를 성공적으로 가져왔습니다.');
    },
    onError: (error) => {
      console.error('프로필 이미지 가져오기 실패:', error);
    },
  });

  const handleEntry = () => {
    navigate('/closet');
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>프로필을 불러오는 데 실패했습니다.</div>;
  }

  const imageUrl = `${profile?.encodedProfileImage}`;

  return (
    <Container>
      <Header />
      <Title>현재 내 프로필</Title>
      <ProfileImage src={imageUrl} alt="프로필 이미지" />
      <Button
        variant="entryBtn"
        onClick={handleEntry}
      >
        새 프로필 만들기
      </Button>
    </Container>
  );
};


export default ClosetEntry;
