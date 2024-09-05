import React, { useState } from 'react';
import { useQuery } from 'react-query';
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
  PriceTypeWrapper,
  PriceTypeItem,
  InvestImage,
  QuestionImage,
  HintTitle,
  HintContent,
  BuySectionBox,
  TopSectionBottom,
  TopSectionTop,
  InvestItemImage,
  BuyBotton,
  TitleWithLines,
} from './styled';
import moaImage from '../../assets/images/moa.svg';
import hdyImage from '../../assets/images/Question_HDY.png';
import walk from '../../assets/images/walk.png';
import weight from '../../assets/images/weight.png';
import question from '../../assets/images/question.svg';
import BuyModal from '../BuyModal';
import SellModal from '../SellModal';

const EmptyBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    price: 0,
    hint: '',
    currentMoa: 1000,
    typeId: 0,
  });

  const {
    data: todayData = [],
    isLoading: isTodayLoading,
    refetch: refetchTodayPrice,
  } = useQuery('todayPrice', getTodayPrice);

  const {
    data: averageData = [],
    isLoading: isAverageLoading,
    refetch: refetchAverageData,
  } = useQuery('averageWeightAndStep', getAverageWeightAndStep);

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
    refetchTodayPrice();
    refetchAverageData();
  };

  const handleCloseSellModal = () => {
    setIsSellModalOpen(false);
    refetchTodayPrice();
    refetchAverageData();
  };

  const handleSellConfirm = () => {
    refetchTodayPrice();
    refetchAverageData();
  };

  return (
    <Container>
      <TopWrapper>
        <TopSectionTop onClick={() => handleSectionClick(leftData)}>
          <QuestionImage src={question} alt='question Image' />
          <HdyImage src={hdyImage} alt='Main Image' />
          <PriceTypeWrapper>
            {/* <PriceTypeItem>
              <TypeText>{getTypeText(leftData.type)}</TypeText>
              <PriceWrapper>
                <MoaImage src={moaImage} alt='Moa Image' />
                <Balance>{leftData.price || 'N/A'}</Balance>
              </PriceWrapper>
            </PriceTypeItem> */}
            {/* <PriceTypeItem>
              <TypeText>{getTypeText(rightData.type)}</TypeText>
              <PriceWrapper>
                <MoaImage src={m  oaImage} alt='Moa Image' />
                <Balance>{rightData.price || 'N/A'}</Balance>
              </PriceWrapper>
            </PriceTypeItem> */}
          </PriceTypeWrapper>
          <HintTitle>힌트</HintTitle>
          <HintContent>{leftData.hint || 'No Data'}</HintContent>
        </TopSectionTop>
        <TopSectionBottom>
          <BuySectionBox>
            <PriceTypeItem>
              <InvestItemImage src={weight} alt='weight Image' />
              <TypeText>오늘 {getTypeText(leftData.type)}</TypeText>
              <PriceWrapper>
                <Balance>{leftData.price || 'N/A'}</Balance>
              </PriceWrapper>
              <BuyBotton>구매하기</BuyBotton>
            </PriceTypeItem>
          </BuySectionBox>
          <BuySectionBox>
            <PriceTypeItem>
              <InvestItemImage src={walk} alt='walk Image' />
              <TypeText>오늘 {getTypeText(rightData.type)}</TypeText>
              <PriceWrapper>
                <Balance>{rightData.price || 'N/A'}</Balance>
              </PriceWrapper>
              <BuyBotton>구매하기</BuyBotton>
            </PriceTypeItem>
          </BuySectionBox>
        </TopSectionBottom>
      </TopWrapper>
      <BottomWrapper>
        <TitleWithLines>나의 보유 투자 상품</TitleWithLines>
        <BottomSection>
          <SectionBox>
            {/* <TextLabel>몸무게</TextLabel> */}
            <AverageWrapper>
              <TextLabel>몸무게</TextLabel>
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
              판매하기
            </SellButton>
          </SectionBox>
          <SectionBox>
            {/* <InvestImage src={Shoes} alt='HDY' /> */}
            {/* <TextLabel>걸음수</TextLabel> */}
            <AverageWrapper>
              <TextLabel>걸음수</TextLabel>
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
              판매하기
            </SellButton>
          </SectionBox>
        </BottomSection>
      </BottomWrapper>
      <BuyModal
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
