import React, { useEffect, useState } from 'react';
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

const EmptyBoard = () => {
  const [leftData, setLeftData] = useState(null);
  const [rightData, setRightData] = useState(null);
  const [leftAverage, setLeftAverage] = useState({ average: 0, amount: 0 });
  const [rightAverage, setRightAverage] = useState({ average: 0, amount: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    price: 0,
    hint: '',
    currentMoa: 1000,
    typeId: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todayData = await getTodayPrice();
        const averageData = await getAverageWeightAndStep();

        const leftItem = todayData.find((item) => item.type === 0);
        const rightItem = todayData.find((item) => item.type === 1);

        const leftAverageData = averageData.find((item) => item.typeId === 0);
        const rightAverageData = averageData.find((item) => item.typeId === 1);

        setLeftData(leftItem || {});
        setRightData(rightItem || {});
        setLeftAverage(leftAverageData || { average: 0, amount: 0 });
        setRightAverage(rightAverageData || { average: 0, amount: 0 });
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
      title: `어제 흰디의 ${getTypeText(data.type)}`,
      price: data.price,
      hint: data.hint,
      currentMoa: 1000,
      typeId: data.type,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <SellButton>판매</SellButton>
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
            <SellButton>판매</SellButton>
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
    </Container>
  );
};

export default EmptyBoard;
