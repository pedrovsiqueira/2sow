import styled from 'styled-components';

export const Content = styled.header`
  width: 100vw;
  max-width: 1000px;
  margin: 40px auto 0;
  display: flex;
  justify-content: space-around;
  align-content: center;

  & > div > button {
    display: none;
  }

  @media (max-width: 414px) {
    & > div > button {
      display: block;
    }
  }
`;

export const Navigation = styled.nav`
  @media (max-width: 414px) {
    display: none;
  }

  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #2a2a2a;
  border-radius: 0;

  a {
    font-variant: small-caps;
    letter-spacing: 0.02em;
    font-size: 2.4rem;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100vw;
`;
