import React from 'react';
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

const TownTaxStatus = ({ townInfo }) => {
  return (
    <Container>
      <Title>{townInfo.name} 세금현황</Title>
      <Text>지금까지 세금이 이만큼 모였어요!</Text>
      <HandsImage src={hands} />
      <TaxWrapper>
        <MoaImage src={moa} />
        <TaxText>{townInfo.totalTax}</TaxText>
      </TaxWrapper>
    </Container>
  );
};

export default TownTaxStatus;
