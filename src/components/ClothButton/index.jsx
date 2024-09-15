import React from 'react';
import {
  Container,
  ClothImage,
  InfoWrapper,
  Brand,
  Name,
  Price,
  MoaImage,
} from './styled';
import moaImage from '../../assets/images/moa.svg';
/**
 * 백화점 옷 리스트 컴포넌트
 * @author 임재성
 * @since 2024.08.29
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.29  	임재성        최초 생성
 * </pre>
 */
const ClothButton = ({ clothId, imgUrl, name, brand, price, onClick }) => {
  const handleClick = () => {
    onClick({ clothId, imgUrl, name, brand, price });
  };

  return (
    <Container onClick={handleClick}>
      <ClothImage
        src={require(`../../assets/clothes/${clothId}.png`)}
        alt={name}
      />
      <InfoWrapper>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>
          {price}
          <MoaImage src={moaImage} alt='Moa' />
        </Price>
      </InfoWrapper>
    </Container>
  );
};

export default ClothButton;
