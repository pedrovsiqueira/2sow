import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // name: string;
}

const Input2: React.FC<InputProps> = ({name, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return <StyledInput ref={inputRef} {...rest}></StyledInput>;
};

export default Input2;
