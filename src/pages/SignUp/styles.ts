import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-top: 82px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  figure {
    text-align: center;
  }

  img {
    background: #fefefe;
    box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
    border-radius: 14px;
    padding: 21px 58px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    label {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      font-variant: small-caps;
      margin: 24px 0 8px 0;
    }
  }

  div {
      display: flex;
      justify-content: center;
  }
`;
