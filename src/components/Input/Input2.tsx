import React, { InputHTMLAttributes, useRef } from 'react';
import { StyledInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input2: React.FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return <StyledInput ref={inputRef} {...props}></StyledInput>;
};

export default Input2;
