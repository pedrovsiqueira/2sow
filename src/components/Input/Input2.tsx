import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
} from 'react';
import { Container, StyledInput, Error, StyledLabel } from './styles';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  label: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input2: React.FC<InputProps> = ({
  name,
  icon: Icon,
  label,
  handleChange,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <Container
        isErrored={!!error}
        isFocused={isFocused}
      >
        <StyledInput
          isErrored={!!error}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleChange}
          ref={inputRef}
          {...rest}
        ></StyledInput>

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#f8a186" size={20} />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Input2;
