import React, { useRef } from 'react';
import { StyledInput } from './styles';

const Input: React.FC = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <StyledInput ref={inputRef} {...props}></StyledInput>;
};

export default Input;
