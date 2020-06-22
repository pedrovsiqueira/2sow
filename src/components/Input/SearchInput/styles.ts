import styled, { css } from 'styled-components';

interface StyledProps {
  isFocused?: boolean;
}

export const StyledInput = styled.input<StyledProps>`
  background: transparent;
  border: 0;
  padding: 15px;
  background-color: #ecf0f3;
  box-shadow: 18px 18px 30px #d1d9e6,
    inset 10px 10px 30px rgba(255, 255, 255, 0.4);
  border-radius: 17px;
  margin-bottom: 15px;

  &::placeholder {
    color: #a2a2a2;
  }

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
