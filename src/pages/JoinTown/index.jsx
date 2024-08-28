import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../../components';
import useDebouncedState from '../../hooks/useDebouncedState';
import { axiosInstance } from '../../apis';

import { Container, Logo, Title, Description } from './styled';
import logo from '../../assets/images/join_town.png';

const JoinTown = () => {
  const [townCode, debouncedSetTownCode] = useDebouncedState('');
  const navigate = useNavigate();
  const isButtonDisabled = townCode === '';
  const handleJoin = async () => {
    if (isButtonDisabled) return;
    try {
      const response = await axiosInstance.post('/member/join-town', {
        townCode,
      });

      if (response.status === 200) {
        navigate('/main');
      }
    } catch (error) {
      console.error('타운 코드 입력 실패:', error);
    }
  };
  return (
    <Container>
      <Logo src={logo} />
      <Title>모아모아 타운 코드 입력</Title>
      <Description>
        {`그룹 코드를 입력하고,
        해당 타운의 시민으로 입장해요!`}
      </Description>
      <Input
        placeholder="타운 코드를 입력해주세요."
        onChange={(e) => debouncedSetTownCode(e.target.value)}
      />
      <Button
        variant="joinBtn"
        disabled={isButtonDisabled}
        onClick={handleJoin}
      >
        입장하기
      </Button>
    </Container>
  );
};

export default JoinTown;
