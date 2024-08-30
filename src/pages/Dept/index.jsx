import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Header, Button,ClothButton,WishButton } from '../../components';
import { Container, DeptTitle, Dept_backImage, ClothButtonStyled, ToggleContainer, ToggleButton } from './styled';
import dept_back from '../../assets/images/dept_back.svg';
import { clothesList } from '../../apis/deptAPI'; // Import the clothesList function

const Dept = () => {
  const navigate = useNavigate();
  const [showWishlist, setShowWishlist] = useState(false);

  return (
    <Container>
      <Header />
      <DeptTitle>현대 백화점</DeptTitle>
      
      {/* 토글 버튼 */}
      <ToggleContainer>
        <ToggleButton 
          active={!showWishlist} 
          onClick={() => setShowWishlist(false)}
        >
          일반 상품
        </ToggleButton>
        <ToggleButton 
          active={showWishlist} 
          onClick={() => setShowWishlist(true)}
        >
          위시 상품
        </ToggleButton>
      </ToggleContainer>

      {/* 리스트 조건부 렌더링 */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Dept_backImage src={dept_back} />
        <ClothButtonStyled>
          {showWishlist ? (
            <>
              <WishButton>위시리스트 버튼 1</WishButton>
              <WishButton>위시리스트 버튼 2</WishButton>
              <WishButton>위시리스트 버튼 3</WishButton>
              <WishButton>위시리스트 버튼 </WishButton>

            </>
          ) : (
            <>
              <ClothButton>일반 상품 버튼 1</ClothButton>
              <ClothButton>일반 상품 버튼 2</ClothButton>
              <ClothButton>일반 상품 버튼 3</ClothButton>
            </>
          )}
        </ClothButtonStyled>
      </div>

      <Button variant="buyBtn">
        구매
      </Button>
    </Container>
  );
};

export default Dept;