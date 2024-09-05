import React from 'react';
import { Header, InvestBoard } from '../../components';

import { Container, Title, TitleWrapper, Description } from './styled';
import info from '../../assets/images/infoIcon.svg';

const Invest = () => {
  //const { refetch } = useQuery('balance', fetchBalance);

  return (
    <Container>
      <Header />
      <TitleWrapper>
        <Title>흰디의 내일을 맞춰봐요</Title>
        {/* <Image src={info} alt='infoIcon'></Image> */}
      </TitleWrapper>
      <Description>
        {`흰디의 내일 몸무게와 걸음수를 예측해\n 모아를 벌어봐요!`}
      </Description>
      <InvestBoard />
    </Container>
  );
};

export default Invest;
