import React from 'react';
import { Input, Button } from '../../components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import { signUp } from '../../apis/memberApi';
import logo from '../../assets/images/logo.png';
import { Container, Logo, Title, Description, Form } from './styled';
import useDebouncedState from '../../hooks/useDebouncedState';

/**
 * 회원 가입 페이지
 * @author 이주현
 * @since 2024.08.27
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.27  이주현      최초 생성
 * </pre>
 */

const SignUp = () => {
  const [nickname, debouncedSetNickname] = useDebouncedState('');
  const [loginId, debouncedSetUserId] = useDebouncedState('');
  const [password, debouncedSetPassword] = useDebouncedState('');
  const [confirmPassword, debouncedSetConfirmPassword] = useDebouncedState('');

  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || 0;

  const isButtonDisabled =
    password !== confirmPassword || !password || !confirmPassword;

  const mutation = useMutation(
    () => signUp(nickname, loginId, password, role),
    {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (error) => {
        console.error('회원가입 실패:', error);
      },
    }
  );

  const handleSignUp = () => {
    if (!isButtonDisabled) {
      mutation.mutate();
    }
  };

  return (
    <Container>
      <Logo src={logo} alt='logo' />
      <Title>모아모아 타운 입장하기</Title>
      <Description>
        {`모아모아 타운에 들어가기 위해서는
        회원가입이 필요해요.`}
      </Description>
      <Form>
        <Input
          placeholder='닉네임을 입력해주세요.'
          onChange={(e) => debouncedSetNickname(e.target.value)}
        />
        <Input
          placeholder='아이디를 입력해주세요.'
          onChange={(e) => debouncedSetUserId(e.target.value)}
        />
        <Input
          placeholder='비밀번호를 입력해주세요.'
          onChange={(e) => debouncedSetPassword(e.target.value)}
          type='password'
        />
        <Input
          placeholder='비밀번호를 재입력해주세요.'
          onChange={(e) => debouncedSetConfirmPassword(e.target.value)}
          type='password'
        />
        <Button
          variant='signupBtn'
          disabled={isButtonDisabled}
          onClick={handleSignUp}
        >
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
