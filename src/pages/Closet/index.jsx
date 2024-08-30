import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Button } from '../../components';
import { fetchMyclothes } from '../../apis/closetApi';
import leftArrow from '../../assets/images/left_arrow.svg';
import heendy from '../../assets/images/heendy.png';

import { Container, Wrapper, Title, BackButton} from './styled';

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

const Closet = () => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    
  };

  const handleGoBack = () => {
    navigate('/closet-entry');
  };

  return (
    <Container>
        <Wrapper>
            <BackButton onClick={handleGoBack}>
                <img src={leftArrow} alt="뒤로가기" />
            </BackButton>
            <Title>흰디의 옷장</Title>
            <Button variant="updateBtn" onClick={handleUpdate}>
                올리기
            </Button>
        </Wrapper>
    </Container>
  );
};


export default Closet;
