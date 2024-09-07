import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Input, Button } from '../../components';
import useDebouncedState from '../../hooks/useDebouncedState';
import { joinTown } from '../../apis/memberApi';

import { Container, Logo, Title, Description } from './styled';
import logo from '../../assets/images/join_town.png';

/**
 * 타운 참가를 위한 코드 입력 페이지
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

const JoinTown = () => {
  const [townCode, debouncedSetTownCode] = useDebouncedState('');
  const navigate = useNavigate();
  const isButtonDisabled = townCode === '';
  const mutation = useMutation(() => joinTown(townCode), {
    onSuccess: () => {
      navigate('/main');
    },
    onError: (error) => {
      console.error('타운 코드 입력 실패:', error);
    },
  });

  const handleJoin = () => {
    if (!isButtonDisabled) {
      mutation.mutate();
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
        placeholder='타운 코드를 입력해주세요.'
        onChange={(e) => debouncedSetTownCode(e.target.value)}
      />
      <Button
        variant='joinBtn'
        disabled={isButtonDisabled}
        onClick={handleJoin}
      >
        입장하기
      </Button>
    </Container>
  );
};

export default JoinTown;
