import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, BackgroundImage } from './styled';
import bg from '../../assets/images/onboarding.gif';

/**
 * 온보딩 페이지
 * @author 이주현
 * @since 2024.08.20
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.20  이주현      최초 생성
 * 2024.09.05  이주현      페이지 제작
 * </pre>
 */

const Onboarding = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/select-role');
  };

  return (
    <Container>
      <BackgroundImage src={bg} alt='onboarding' onClick={handleImageClick} />
    </Container>
  );
};

export default Onboarding;
