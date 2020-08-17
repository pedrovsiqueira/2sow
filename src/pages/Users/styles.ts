import styled from 'styled-components';

interface IProps {
  isShowing: boolean;
}

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

  & > span {
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

export const Modal = styled.div<IProps>`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ecf0f3;
  border-radius: 17px;

  padding: 30px;

  width: 350px;
  height: 258px;

  display: ${(props) => (props.isShowing ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > figure {
    align-self: flex-end;
  }

  & > p {
    font-size: 1.8rem;
    letter-spacing: 0.02em;
    text-align: center;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      display: block;
      padding: 10px 18px;
      font-size: 1.8rem;
      cursor: pointer;
      font-variant: small-caps;
    }

    & > button {
      font-size: 2.6rem;
      width: 154px;
      height: 48px;
      background-color: #f8a186;
      box-shadow: none;
      color: #ecf0f3;

      &:hover {
        background-color: #f8a186;
      }
    }
  }
`;

export const Overlay = styled.div<IProps>`
  display: ${(props) => (props.isShowing ? 'block' : 'none')};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 90;
`;

export const ErrorMessage = styled.div`
grid-column: 1 / 4;
  p {
    margin-top: 200px;
    text-align: center;
    font-size: 1.8rem;
    letter-spacing: 0.02em;
  }
`;
