import React from 'react';
import { useRecoilValue } from 'recoil';
import { townInfoState } from '../../store/atoms';
import {
  Container,
  HandsImage,
  Title,
  Text,
  TaxWrapper,
  MoaImage,
  TaxText,
} from './styled';
import hands from '../../assets/images/clappinghands.png';
import moa from '../../assets/images/moa.svg';

const TownTaxStatus = () => {
  const town = useRecoilValue(townInfoState);

  return (
    <Container>
      <Title>{town.name} 세금현황</Title>
      <Text>지금까지 세금이 이만큼 모였어요!</Text>
      <HandsImage src={hands} />
      <TaxWrapper>
        <MoaImage src={moa} />
        <TaxText>{town.totalTax}</TaxText>
      </TaxWrapper>
    </Container>
  );
};

export default TownTaxStatus;
