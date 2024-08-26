import React from 'react';
import { StyledInput } from './styled';

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
