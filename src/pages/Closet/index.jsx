import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  selectedTypeState,
  selectedItemsState,
  selectedFaceState,
} from '../../store/atoms';
import { Container, Wrapper, Title, BackButton } from './styled';
import {
  Button,
  Canvas,
  ItemContainer,
  TypeSelector,
  ProfileModal,
} from '../../components';
import back from '../../assets/images/back.svg';
import face1 from '../../assets/images/heendy_face1.png';
import heendy from '../../assets/images/heendy_body.png';
import { updateProfile } from '../../apis/closetApi';
import html2canvas from 'html2canvas';

/**
 * 흰디의 옷장 페이지
 * @author 임원정
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  	임원정        최초 생성
 * 2024.08.31   임원정        캔버스에 선택한 옷 올리기 추가
 * 2024.09.01   임원정        프로필 업데이트 수정
 * </pre>
 */

const Closet = () => {
  const [clothes, setClothes] = useState([]);
  const [face, setFace] = useState(face1);
  const [selectedType, setSelectedType] = useRecoilState(selectedTypeState);
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);
  const [selectedFace, setSelectedFace] = useRecoilState(selectedFaceState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const handleSelectItem = (itemData) => {
    if (itemData.type === 0) {
      setSelectedFace(itemData.url);
    } else {
      const existingIndex = clothes.findIndex((c) => c.type === itemData.type);
      if (existingIndex !== -1) {
        if (clothes[existingIndex].url === itemData.url) {
          const updatedClothes = clothes.filter(
            (_, index) => index !== existingIndex
          );
          setClothes(updatedClothes);
          setSelectedItems((prev) => prev.filter((id) => id !== itemData.url));
        } else {
          const updatedClothes = [...clothes];
          updatedClothes[existingIndex] = itemData;
          setClothes(updatedClothes);
          setSelectedItems((prev) => [
            ...prev.filter((id) => id !== clothes[existingIndex].url),
            itemData.url,
          ]);
        }
      } else {
        setClothes([...clothes, itemData]);
        setSelectedItems((prev) => [...prev, itemData.url]);
      }
    }
  };

  const handleUpdate = () => {
    html2canvas(document.querySelector('#canvas')).then((canvas) => {
      const img = canvas.toDataURL('image/png', 1);
      setProfileImage(img);
      setIsModalOpen(true);
    });
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    updateProfile(profileImage)
      .then((response) => {
        navigate('/closet-entry');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <BackButton onClick={() => navigate(-1)}>
          <img src={back} alt='뒤로가기' />
        </BackButton>
        <Title>흰디 꾸미기</Title>
        <Button variant='updateBtn' onClick={handleUpdate}>
          올리기
        </Button>
      </Wrapper>

      <Canvas
        ref={canvasRef}
        heendy={heendy}
        face={selectedFace}
        clothes={clothes}
      />

      <TypeSelector
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <ItemContainer onSelectItem={handleSelectItem} />
      <ProfileModal
        isOpen={isModalOpen}
        profileImage={profileImage}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </Container>
  );
};

export default Closet;
