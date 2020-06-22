import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  figure {
    background: #fefefe;
    box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
    border-radius: 14px;
    padding: 21px 58px;
    text-align: center;
  }

  form{
    width: 100%;
    max-width: 400px;
    padding: 0 40px;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

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

export const GoBackStyled = styled.div`
  position: absolute;
  top: 20px;
  left: 8vw;
`;
