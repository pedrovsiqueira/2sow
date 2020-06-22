import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  h2 {
    font-size: 1.8rem;
    font-weight: normal;
    text-align: center;
    margin: 55px 60px;
  }

  fieldset {
    padding: 0 60px;
    width: 100%;
    text-align: start;

    & > legend {
      letter-spacing: 0.02em;
      font-variant: small-caps;
      font-weight: 600;
      font-size: 2rem;
      margin-bottom: 8px;
    }

    & > p {
      margin-bottom: 24px;
    }
  }

  form {
    margin: 0 auto;
    max-width: 715px;
  }
`;

export const StyledButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 25px 0 48px;
`;
