import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { Container, Wrapper, Title, BackButton } from './styled';
import { Button } from '../../components';
import { updateProfile } from '../../apis/closetApi';
import back from '../../assets/images/back.svg';
import heendy from '../../assets/images/heendy_avatar.png';

import Canvas from '../../components/Canvas';
import ClothesContainer from '../../components/ClothesContainer';
import TypeSelector from '../../components/TypeSelector';

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
    const [selectedType, setSelectedType] = useState(0);  // 초기 타입은 '상의'
    const [currentClothes, setCurrentClothes] = useState(null);
    const navigate = useNavigate();
  
    const handleGoBack = () => {
      navigate(-1);
    };
  
    const handleUpdate = () => {
      html2canvas(document.querySelector("#canvas")).then(canvas => {
        canvas.toBlob(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              const base64data = reader.result;
              updateProfile(base64data).then(response => {
                console.log('Profile updated successfully:', response);
              }).catch(error => {
                console.error('Error updating profile:', error);
              });
            };
          });
      });
    };
  
    return (
      <Container>
        <Wrapper>
          <BackButton onClick={handleGoBack}>
            <img src={back} alt="뒤로가기" />
          </BackButton>
          <Title>흰디의 옷장</Title>
          <Button variant="updateBtn" onClick={handleUpdate}>올리기</Button>
        </Wrapper>
  
        <Canvas id="canvas" heendy={heendy} currentClothes={currentClothes} />
  
        <TypeSelector selectedType={selectedType} onSelectType={setSelectedType} />
  
        <ClothesContainer selectedType={selectedType} onSelectClothes={setCurrentClothes} />
      </Container>
    );
  };
  
  export default Closet;
