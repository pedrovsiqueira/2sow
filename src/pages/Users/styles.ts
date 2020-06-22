import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  main {
    width: 100%;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      letter-spacing: 0.02em;
      font-variant: small-caps;
      font-weight: 600;
      font-size: 3.6rem;
    }

    p {
      font-size: 1.8rem;
      letter-spacing: 0.02em;
      margin-bottom: 24px;
    }

    input {
      align-self: center;
    }
  }
`;
