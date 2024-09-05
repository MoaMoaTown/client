import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, BackgroundImage } from './styled';
import bg from '../../assets/images/onboarding.gif';

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
