import styled from 'styled-components';

export const Container = styled.div`
  & :hover {
    background-color: #e2e6e9;
  }

  button {
    background-color: transparent;
    width: 104px;
    height: 36px;
    letter-spacing: 0.02em;
    font-variant: small-caps;
    font-size: 1.8rem;
    text-align: center;
  }
`;
