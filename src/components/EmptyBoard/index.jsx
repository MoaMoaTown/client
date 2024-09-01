import React, { useEffect, useState } from 'react';
import { getTodayPrice } from '../../apis/InvestApi';
import {
  Container,
  TopWrapper,
  BottomWrapper,
  Divider,
  Section,
  HintText,
  TypeText,
  PriceWrapper,
  MoaImage,
  Balance,
  HdyImage,
} from './styled';
import moaImage from '../../assets/images/moa.svg'; // 이미지 경로를 import
import hdyImage from '../../assets/images/hdy.png'; // HDY 이미지 경로
import LargeInfoModal from '../LargeInfoModal'; // 모달 컴포넌트 import

const EmptyBoard = () => {
  const [leftData, setLeftData] = useState(null);
  const [rightData, setRightData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    price: 0,
    hint: '',
    currentMoa: 1000,
    typeId: 0, // typeId 추가
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodayPrice();

        const leftItem = data.find((item) => item.type === 0);
        const rightItem = data.find((item) => item.type === 1);

        setLeftData(leftItem || {});
        setRightData(rightItem || {});
      } catch (error) {
        console.error('데이터를 가져오는데 실패했습니다.', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  const getTypeText = (type) => {
    switch (type) {
      case 0:
        return '몸무게';
      case 1:
        return '걸음수';
      default:
        return 'Unknown';
    }
  };

  const handleSectionClick = (data) => {
    setModalContent({
      title: `어제 흰디의 ${getTypeText(data.type)}`, // 제목 앞에 '어제 흰디의' 추가
      price: data.price,
      hint: data.hint,
      currentMoa: 1000, // 현재 모아 정보를 예시로 설정
      typeId: data.type, // 클릭된 항목의 type을 저장
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <TopWrapper>
        <Section onClick={() => handleSectionClick(leftData)}>
          <HintText>{leftData.hint || 'No Data'}</HintText>
          <HdyImage src={hdyImage} alt='Left Image' />
          <TypeText>{getTypeText(leftData.type)}</TypeText>
          <PriceWrapper>
            <MoaImage src={moaImage} alt='Moa Image' />
            <Balance>{leftData.price || 'N/A'}</Balance>
          </PriceWrapper>
        </Section>
        <Section onClick={() => handleSectionClick(rightData)}>
          <HintText>{rightData.hint || 'No Data'}</HintText>
          <HdyImage src={hdyImage} alt='Right Image' />
          <TypeText>{getTypeText(rightData.type)}</TypeText>
          <PriceWrapper>
            <MoaImage src={moaImage} alt='Moa Image' />
            <Balance>{rightData.price || 'N/A'}</Balance>
          </PriceWrapper>
        </Section>
      </TopWrapper>
      <Divider />
      <BottomWrapper />
      <LargeInfoModal
        isOpen={isModalOpen}
        title={modalContent.title} // 설정된 제목 전달
        price={modalContent.price}
        hint={modalContent.hint}
        currentMoa={modalContent.currentMoa}
        typeId={modalContent.typeId} // 설정된 typeId 전달
        onConfirm={handleCloseModal}
        onClose={handleCloseModal} // 모달 바깥 클릭 시 닫기 위한 onClose 전달
      />
    </Container>
  );
};

export default EmptyBoard;
