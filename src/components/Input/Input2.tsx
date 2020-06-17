import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { StyledInput } from './styles';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input2: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
      <StyledInput
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        {...rest}
      ></StyledInput>
  );
};

export default Input2;
