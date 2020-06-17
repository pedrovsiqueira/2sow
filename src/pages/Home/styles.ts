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
  h1 {
    margin: 87px 0;
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
    & :first-child{
      margin-right: 28px;
    }
  }
`;
