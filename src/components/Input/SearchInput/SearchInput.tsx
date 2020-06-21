import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
} from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
      ref={inputRef}
      {...props}
    ></StyledInput>
  );
};

export default SearchInput;
