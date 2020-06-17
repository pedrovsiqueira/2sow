import styled, { css } from 'styled-components';

interface StyledProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<StyledProps>`
  min-width: 304px;
  box-sizing: border-box;
  background-color: #ecf0f3;
  box-shadow: 18px 18px 30px #d1d9e6,
    inset 10px 10px 30px rgba(255, 255, 255, 0.4);
  border-radius: 17px;

  ${(props) =>
    props.isErrored &&
    css`
      background: #ecf0f3;
      border: 2px solid #f8a186;
      box-shadow: 18px 18px 30px #bfcee6,
        inset 10px 10px 30px rgba(255, 196, 196, 0.4);
      color: #f8a186;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      box-shadow: 18px 18px 30px #bfcee6,
        inset 10px 10px 30px rgba(255, 255, 255, 0.4);
      border: 2px solid #a6bba8;
    `}
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  padding: 15px;
  height: 50px;

  &::placeholder {
    color: #a2a2a2;
  }
`;
