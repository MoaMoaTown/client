import React from 'react';
import { StyledButton } from './styled';

/**
 * 버튼 컴포넌트
 * @author 이주현
 * @since 2024.08.20
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.20  이주현      최초 생성
 * </pre>
 */

const Button = ({
  variant,
  onClick,
  children,
  disabled,
  type = 'button',
  active,
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={active ? 'active' : ''}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
