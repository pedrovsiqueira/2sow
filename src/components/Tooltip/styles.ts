import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 135px;
    background: #ecf0f3;
    box-shadow: 18px 18px 30px #bfcee6,
      inset 10px 10px 30px rgba(255, 196, 196, 0.4);
    padding: 8px;
    border-radius: 17px;
    font-size: 14px;
    font-weight: 500;
    color: #a2a2a2;
    opacity: 0;
    transition: opacity 0.4s;

    position: absolute;
    bottom: 100%;
    left: 28%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #f8a186 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
  }
`;
