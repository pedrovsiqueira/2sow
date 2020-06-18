import styled, { css } from 'styled-components';

interface StyledProps {
  isFocused?: boolean;
  isErrored: boolean;
}

export const Container = styled.div<StyledProps>`
  width: 304px;
  height: 50px;
  display: flex;
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

      &::placeholder {
        color: #a2a2a2;
      }
    `}
`;

export const StyledInput = styled.input<StyledProps>`
  background: transparent;
  border: 0;
  padding: 15px;

  &::placeholder {
    color: #a2a2a2;
  }
`;

export const Error = styled.div`
  height: 20px;
  svg {
    margin: 12px 0px 0px 40px;
  }
`;
