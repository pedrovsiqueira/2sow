import React, { InputHTMLAttributes, useRef } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <StyledInput ref={inputRef} {...props}></StyledInput>;
};

export default Input;
