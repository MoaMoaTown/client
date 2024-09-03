import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { logout } from '../../apis/memberApi';
import { createTown } from '../../apis/townApi';
import { loginState, loginInfo } from '../../store/atoms';
import {
  Container,
  Logo,
  Title,
  Description,
  Form,
  Wrapper,
  Nickname,
  Logout,
  InputField,
  MoaImage,
  SelectField,
  Option,
  SalaryWrapper,
  PayCycleText,
} from './styled';
import { Button, TownCodeModal } from '../../components';
import useDebouncedState from '../../hooks/useDebouncedState';
import logo from '../../assets/images/logo.png';
import moa from '../../assets/images/moa.svg';

/**
 * 타운 만들기 페이지
 * @author 임원정
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03 	임원정        최초 생성
 * </pre>
 */

const MakeTown = () => {
  const user = useRecoilValue(loginInfo);
  const navigate = useNavigate();
  const setLoginState = useSetRecoilState(loginState);
  const setLoginInfo = useSetRecoilState(loginInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [townCode, setTownCode] = useState('');
  const [name, debouncedSetName] = useDebouncedState('');
  const [description, debouncedSetDescription] = useDebouncedState('');
  const [payCycle, debouncedSetPayCycle] = useDebouncedState('');

  const isButtonDisabled = name === '' || description === '' || payCycle === '';

  const logoutMutation = useMutation(logout, {
    onSuccess: () => {
      setLoginState({ isLogin: false });
      setLoginInfo({});
      navigate('/login');
    },
    onError: (error) => {
      console.error('로그아웃 실패:', error);
    },
  });

  const makeTownMutation = useMutation(
    () => createTown(name, description, payCycle),
    {
      onSuccess: (response) => {
        setTownCode(response.townCode);
        setIsModalOpen(true);
      },
      onError: (error) => {
        console.error('타운 만들기 실패:', error);
      },
    }
  );

  const handleMakeTown = () => {
    if (!isButtonDisabled) {
      makeTownMutation.mutate();
    }
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    navigate('/admin');
  };

  return (
    <Container>
      <Wrapper>
        <Nickname>{user.nickname}님</Nickname>
        <Logout onClick={handleLogout}>로그아웃</Logout>
      </Wrapper>
      <Logo src={logo} alt='logo' />
      <Title>새로운 타운 만들기</Title>
      <Description>
        {`안녕하세요, 모아모아 타운 시장님!
새로운 타운을 만들고 시민들을 초대해보아요`}
      </Description>
      <Form>
        <InputField
          placeholder='타운명을 입력해주세요.'
          onChange={(e) => debouncedSetName(e.target.value)}
        />
        <InputField
          placeholder='타운에 대한 설명을 입력해주세요.'
          onChange={(e) => debouncedSetDescription(e.target.value)}
        />
        <SalaryWrapper>
          <MoaImage src={moa} />
          <PayCycleText>급여 주기</PayCycleText>
          <SelectField
            value={payCycle}
            onChange={(e) => debouncedSetPayCycle(Number(e.target.value))}
          >
            <Option value=''>급여 주기를 선택해주세요.</Option>
            <Option value='3'>3일</Option>
            <Option value='7'>1주</Option>
            <Option value='14'>2주</Option>
            <Option value='30'>한 달</Option>
          </SelectField>
        </SalaryWrapper>
        <Button
          variant='makeTownBtn'
          disabled={isButtonDisabled}
          onClick={handleMakeTown}
        >
          타운 만들기
        </Button>
      </Form>
      <TownCodeModal
        isOpen={isModalOpen}
        townCode={townCode}
        onClose={handleClose}
      />
    </Container>
  );
};

export default MakeTown;
