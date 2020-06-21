import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVartiations = {
  info: css`
    box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
    border: 2px solid #3172b7;
  `,
  success: css`
    box-shadow: 18px 18px 30px #bfcee6,
      inset 10px 10px 30px rgba(255, 255, 255, 0.4);
    border: 2px solid #a6bba8;
  `,
  error: css`
    border: 2px solid #f8a186;
    box-shadow: 18px 18px 30px #bfcee6,
      inset 10px 10px 30px rgba(255, 196, 196, 0.4);
    color: #f8a186;
  `,
};

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 17px;
  display: flex;

  background: #ecf0f3;

  ${(props) => toastTypeVartiations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
