import React from 'react';
import { Input, Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { login } from '../../apis/memberApi';
import useDebouncedState from '../../hooks/useDebouncedState';
import { loginState, loginInfo } from '../../store/atoms';

import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/login_back.svg';
import {
  Container,
  BackgroundImage,
  Logo,
  Title,
  Description,
  Form,
} from './styled';

const Login = () => {
  const [loginId, debouncedSetUserId] = useDebouncedState('');
  const [password, debouncedSetPassword] = useDebouncedState('');

  const setLoginState = useSetRecoilState(loginState);
  const setLoginInfo = useSetRecoilState(loginInfo);

  const navigate = useNavigate();

  const isButtonDisabled = loginId === '' || password === '';

  const mutation = useMutation(() => login(loginId, password), {
    onSuccess: (data) => {
      const { nickname, role, hasTownId } = data;

      setLoginState({ isLogin: true });

      setLoginInfo({
        nickname,
        role,
        hasTownId,
      });

      if (role === 1) {
        // role이 1이면 관리자 페이지로 리디렉션
        if (hasTownId) {
          //navigate('/admin-main');
        } else {
          //navigate('/admin-maketown');
        }
      } else if (role === 0) {
        if (hasTownId) {
          navigate('/main');
        } else {
          navigate('/join-town');
        }
      }
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });

  const handleSignUp = () => {
    if (!isButtonDisabled) {
      mutation.mutate();
    }
  };

  return (
    <Container>
      <BackgroundImage src={bg} alt="background" />
      <Logo src={logo} alt="logo" />
      <Title>모아모아 타운 입장하기</Title>
      <Description>
        {`모아모아 타운에 들어가기 위해서는
        로그인이 필요해요.`}
      </Description>
      <Form>
        <Input
          placeholder="아이디를 입력해주세요."
          onChange={(e) => debouncedSetUserId(e.target.value)}
        />
        <Input
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => debouncedSetPassword(e.target.value)}
          type="password"
        />
        <Button
          variant="loginBtn"
          disabled={isButtonDisabled}
          onClick={handleSignUp}
        >
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
