import React from 'react';
import { StyledInput } from './styled';

/**
 * 입력 컴포넌트
 * @author 이주현
 * @since 2024.08.27
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.27  이주현      최초 생성
 * </pre>
 */

const Input = ({ placeholder, value, onChange, type = 'text', ...rest }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
