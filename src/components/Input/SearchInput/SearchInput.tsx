import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { StyledInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <StyledInput
      isFocused={isFocused}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      {...props}
    ></StyledInput>
  );
};

export default SearchInput;
