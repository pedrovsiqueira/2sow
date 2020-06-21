import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  nav {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1 {
      letter-spacing: 0.02em;
      font-variant: small-caps;
      font-weight: 600;
      font-size: 3.6rem;
    }

    p {
      font-size: 1.8rem;
      letter-spacing: 0.02em;
      width: 334px;
    }
  }
`;
