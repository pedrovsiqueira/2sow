import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;

  h1 {
    font-size: 36px;
    text-align: center;
    margin: 87px 0;
    font-weight: 400;
  }

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
    justify-content: space-around;
  }
`;
