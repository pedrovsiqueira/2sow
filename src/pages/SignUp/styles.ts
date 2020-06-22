import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 414px) {
    margin-top: 82px;
  }
  
  figure {
    text-align: center;
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

    & :last-child > div {
      margin-bottom: 50px;
    }
  }
`;

export const GoBackStyled = styled.div`
  position: absolute;
  top: 20px;
  left: 8vw;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 414px) {
    margin-bottom: 47px;
  }
`;
