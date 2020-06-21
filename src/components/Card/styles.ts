import styled from 'styled-components';

export const Container = styled.div`
  width: 334px;
  height: 193px;
  background: #ecf0f3;
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
  border-radius: 17px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;

  p:nth-child(3) {
    margin: 16px 0;
  }

  main {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;

    h3 {
      font-size: 2rem;
    }
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;

    > p {
      letter-spacing: 0.07em;
      font-weight: 600;
    }
  }
`;
