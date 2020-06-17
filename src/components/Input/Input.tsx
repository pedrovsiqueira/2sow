import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, handleChange, ...rest }) => {
  return (
    <div />
    // <StyledInput value={value} onChange={handleChange} {...rest}></StyledInput>
  );
};

export default Input;
