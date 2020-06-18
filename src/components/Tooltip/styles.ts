import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    text-align: center;
    width: 180px;
    background: #f8a186;
    padding: 8px;
    border-radius: 17px;
    font-size: 14px;
    font-weight: 500;
    color: #ecf0f3;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: 161%;
    left: 38%;
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
    visibility: visible;
  }
`;
