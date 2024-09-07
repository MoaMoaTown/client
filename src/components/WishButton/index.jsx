import React from 'react';
import { StyledWishButton, PriceWrapper, MoaImage } from './styled';
import moaImage from '../../assets/images/moa.svg';
/**
 * 백화점 위시 리스트 컴포넌트
 * @author 임재성
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  	임재성        최초 생성
 * </pre>
 */
const WishButton = ({ children, price, onClick, ...rest }) => {
  return (
    <StyledWishButton onClick={onClick} {...rest}>
      <span>{children}</span>
      <PriceWrapper>
        {price}
        <MoaImage src={moaImage} alt='Moa' />
      </PriceWrapper>
    </StyledWishButton>
  );
};

export default WishButton;
