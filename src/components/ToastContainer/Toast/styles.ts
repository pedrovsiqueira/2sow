import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVartiations = {
  info: css`
    box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
    border: 2px solid #3172b7;
  `,
  success: css`
    box-shadow: 2px 2px 8px #20202026,
      inset 2px 2px 8px rgba(255, 255, 255, 0.4);
    border: 2px solid #a6bba8;
    color: #a6bba8;
  `,
  error: css`
    border: 2px solid #f8a186;
    box-shadow: 2px 2px 8px #bfcee6, inset 2px 2px 8px rgba(255, 196, 196, 0.4);
    color: #f8a186;
  `,
};

export const Container = styled.div<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 17px;
  display: flex;
  background: #ecf0f3;

  & + div {
    margin-top: 8px;
  }

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

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
