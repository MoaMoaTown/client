import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { Container, Wrapper, Title, BackButton } from './styled';
import { Button, Toast } from '../../components';
import back from '../../assets/images/back.svg';
import heendy from '../../assets/images/heendy_avatar.png';
import Canvas from '../../components/Canvas';
import ClothesContainer from '../../components/ClothesContainer';
import TypeSelector from '../../components/TypeSelector';
import { updateProfile } from '../../apis/closetApi';

const Closet = () => {
  const [selectedType, setSelectedType] = useState(0);
  const [clothes, setClothes] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);  // 이미지 로드 상태
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  const handleSelectClothes = (clothesData) => {
    setClothes([...clothes, clothesData]);
  };

  const handleImagesLoaded = () => {
    setImagesLoaded(true);
    console.log("All images loaded.");
  };

  const handleUpdate = () => {
    if (imagesLoaded) {
      console.log("Images are fully loaded. Proceeding with update.");
      html2canvas(document.querySelector("#canvas")).then(canvas => {
        canvas.toBlob(blob => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const base64data = reader.result;

            // Base64 데이터를 브라우저에서 바로 열기 (새 탭)
            const newWindow = window.open();
            newWindow.document.write(`<img src="${base64data}" />`);

            console.log("Base64 Data:", base64data);
            updateProfile(base64data).then(response => {
              setToast(true);
            }).catch(error => {
              console.error('Error updating profile:', error);
            });
          };
        });
      });
    } else {
      console.warn("Images are not fully loaded yet.");
    }
};




  return (
    <Container>
      <Wrapper>
        <BackButton onClick={() => navigate(-1)}>
          <img src={back} alt="뒤로가기" />
        </BackButton>
        <Title>나의 옷장</Title>
        <Button variant="updateBtn" onClick={handleUpdate}>올리기</Button>
      </Wrapper>

      <Canvas
        heendy={heendy}
        clothes={clothes}
        onImagesLoaded={handleImagesLoaded}
      />

      <TypeSelector selectedType={selectedType} onSelectType={setSelectedType} />
      <ClothesContainer selectedType={selectedType} onSelectClothes={handleSelectClothes} />
      {toast && <Toast setToast={setToast} text="프로필이 업데이트 됐습니다." duration={3000} />}
    </Container>
  );
};

export default Closet;
