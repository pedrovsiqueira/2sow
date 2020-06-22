import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  main {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 13px;

    @media (max-width: 414px) {
      align-items: flex-start;
    }

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

  & > section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px 0;

    @media (max-width: 414px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 35px 0;
    }
  }

  span {
    width: 100%;
    min-height: calc(100vh - 552.279px);
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-content: center;

    @media (min-width: 415px) {
      min-height: calc(100vh - 472.279px);
    }
  }

  & > footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 80px;
    background: #ecf0f3;
    display: flex;
    justify-content: center;
    align-items: center;

    figure a {
      box-shadow: 8px 8px 13px #d1d9e6, -8px -8px 13px #ffffff;
      border-radius: 37px;
      width: 54px;
      height: 54px;
      display: flex;
      justify-content: center;
    }

    @media (min-width: 415px) {
      display: none;
    }
  }
`;

export const PageControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

  button {
    margin: 30px 20px 110px;

    @media (min-width: 415px) {
      margin: 30px 20px;
    }
  }
`;
