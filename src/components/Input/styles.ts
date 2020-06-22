import styled, { css } from 'styled-components';
import Tooltip from '../../components/Tooltip/Tooltip';

interface StyledProps {
  isFocused?: boolean;
  isErrored: boolean;
}

export const Container = styled.div<StyledProps>`
  width: 100%;
  max-width: 615px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #ecf0f3;
  box-shadow: 18px 18px 30px #d1d9e6,
    inset 10px 10px 30px rgba(255, 255, 255, 0.4);
  border-radius: 17px;
  margin-bottom: 24px;

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

    & :disabled {
    background: #d1d9e6;
    color: #5c5c5c;
    border-radius: 17px;
  }
`;

export const StyledInput = styled.input<StyledProps>`
  background: transparent;
  border: 0;
  padding: 15px;
  width: 100%;

  &::placeholder {
    color: #a2a2a2;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  padding: 12px 10px 0 0;
`;

export const StyledLabel = styled.label`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-variant: small-caps;
  margin-bottom: 8px;
  display: block;
`;
