import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getTodayPrice, getAverageWeightAndStep } from '../../apis/InvestApi';
import {
  Container,
  TopWrapper,
  BottomWrapper,
  BottomSection,
  Title,
  Divider,
  Section,
  SectionBox,
  HintBubble,
  TypeText,
  PriceWrapper,
  MoaImage,
  Balance,
  HdyImage,
  AverageWrapper,
  AverageItem,
  AverageLabel,
  AverageValue,
  SellButton,
  TextLabel,
  TopTitle,
} from './styled';
import moaImage from '../../assets/images/moa.svg';
import hdyImage from '../../assets/images/hdy.png';
import LargeInfoModal from '../LargeInfoModal';
import SellModal from '../SellModal';

const EmptyBoard = () => {
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    price: 0,
    hint: '',
    currentMoa: 1000,
    typeId: 0,
  });

  const { data: todayData = [], isLoading: isTodayLoading } = useQuery(
    'todayPrice',
    getTodayPrice
  );

  const { data: averageData = [], isLoading: isAverageLoading } = useQuery(
    'averageWeightAndStep',
    getAverageWeightAndStep
  );

  const leftData = todayData.find((item) => item.type === 0) || {};
  const rightData = todayData.find((item) => item.type === 1) || {};

  const leftAverage = averageData.find((item) => item.typeId === 0) || {
    average: 0,
    amount: 0,
  };
  const rightAverage = averageData.find((item) => item.typeId === 1) || {
    average: 0,
    amount: 0,
  };

  if (isTodayLoading || isAverageLoading) {
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
      title: `어제 흰디의 ${getTypeText(data.type)}`,
      price: data.price,
      hint: data.hint,
      currentMoa: 1000,
      typeId: data.type,
    });
    setIsModalOpen(true);
  };

  const handleSellClick = (data, typeText) => {
    setModalContent({
      title: `${typeText} 매도하기`,
      price: data.price,
      hint: data.hint,
      currentMoa: 1000,
      typeId: data.type,
    });
    setIsSellModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    queryClient.invalidateQueries('todayPrice');
    queryClient.invalidateQueries('averageWeightAndStep');
    queryClient.invalidateQueries('balance'); // balance 업데이트
  };

  const handleCloseSellModal = () => {
    setIsSellModalOpen(false);
    queryClient.invalidateQueries('todayPrice');
    queryClient.invalidateQueries('averageWeightAndStep');
    queryClient.invalidateQueries('balance'); // balance 업데이트
  };

  const handleSellConfirm = () => {
    queryClient.invalidateQueries('todayPrice');
    queryClient.invalidateQueries('averageWeightAndStep');
    queryClient.invalidateQueries('balance'); // balance 업데이트
  };

  return (
    <Container>
      <TopTitle>오늘의 흰디</TopTitle>
      <TopWrapper>
        <Section onClick={() => handleSectionClick(leftData)}>
          <HintBubble>{leftData.hint || 'No Data'}</HintBubble>
          <HdyImage src={hdyImage} alt='Left Image' />
          <TypeText>{getTypeText(leftData.type)}</TypeText>
          <PriceWrapper>
            <MoaImage src={moaImage} alt='Moa Image' />
            <Balance>{leftData.price || 'N/A'}</Balance>
          </PriceWrapper>
        </Section>
        <Section onClick={() => handleSectionClick(rightData)}>
          <HintBubble>{rightData.hint || 'No Data'}</HintBubble>
          <HdyImage src={hdyImage} alt='Right Image' />
          <TypeText>{getTypeText(rightData.type)}</TypeText>
          <PriceWrapper>
            <MoaImage src={moaImage} alt='Moa Image' />
            <Balance>{rightData.price || 'N/A'}</Balance>
          </PriceWrapper>
        </Section>
      </TopWrapper>
      <Divider />
      <BottomWrapper>
        <Title>나의 보유 현황</Title>
        <BottomSection>
          <SectionBox>
            <HdyImage src={hdyImage} alt='HDY' />
            <TextLabel>몸무게</TextLabel>
            <AverageWrapper>
              <AverageItem>
                <AverageLabel>평단가</AverageLabel>
                <AverageValue>
                  <MoaImage src={moaImage} alt='Moa' /> {leftAverage.average}
                </AverageValue>
              </AverageItem>
              <AverageItem>
                <AverageLabel>보유</AverageLabel>
                <AverageValue>{leftAverage.amount}</AverageValue>
              </AverageItem>
            </AverageWrapper>
            <SellButton onClick={() => handleSellClick(leftData, '몸무게')}>
              판매
            </SellButton>
          </SectionBox>
          <SectionBox>
            <HdyImage src={hdyImage} alt='HDY' />
            <TextLabel>걸음수</TextLabel>
            <AverageWrapper>
              <AverageItem>
                <AverageLabel>평단가</AverageLabel>
                <AverageValue>
                  <MoaImage src={moaImage} alt='Moa' /> {rightAverage.average}
                </AverageValue>
              </AverageItem>
              <AverageItem>
                <AverageLabel>보유</AverageLabel>
                <AverageValue>{rightAverage.amount}</AverageValue>
              </AverageItem>
            </AverageWrapper>
            <SellButton onClick={() => handleSellClick(rightData, '걸음수')}>
              판매
            </SellButton>
          </SectionBox>
        </BottomSection>
      </BottomWrapper>
      <LargeInfoModal
        isOpen={isModalOpen}
        title={modalContent.title}
        price={modalContent.price}
        hint={modalContent.hint}
        currentMoa={modalContent.currentMoa}
        typeId={modalContent.typeId}
        onConfirm={handleCloseModal}
        onClose={handleCloseModal}
      />
      <SellModal
        isOpen={isSellModalOpen}
        title={modalContent.title}
        price={modalContent.price}
        typeId={modalContent.typeId}
        onConfirm={handleSellConfirm}
        onClose={handleCloseSellModal}
      />
    </Container>
  );
};

export default EmptyBoard;
