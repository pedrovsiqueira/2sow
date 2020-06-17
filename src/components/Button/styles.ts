import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #ecf0f3;
  min-width: 164px;
  min-height: 64px;
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
  border-radius: 17px;
  font-size: 2.6rem;
  line-height: 110%;
  padding: 15px 6px;
  letter-spacing: 0.02em;
  font-variant: small-caps;

  :hover {
    background: #e2e6e9;
    box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
    border-radius: 17px;
  }

  :focus {
    background: #2a2a2a;
    box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
    border-radius: 17px;
    color: #ecf0f3;
  }
`;
