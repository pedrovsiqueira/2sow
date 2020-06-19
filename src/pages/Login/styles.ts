import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 24px;

    label {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      font-variant: small-caps;
      margin-bottom: 8px;
    }

    & :nth-child(4) {
      margin-bottom: 63px;
    }
  }

  div {
    & :first-child {
      margin: 0 auto;
      display: block;
    }
  }
`;
