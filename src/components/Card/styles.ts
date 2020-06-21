import styled from 'styled-components';

export const Container = styled.div`
  width: 334px;
  height: 193px;
  background: #ecf0f3;
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
  border-radius: 17px;

  main,
  section {
    display: flex;
    justify-content: space-around;

    > p {
      letter-spacing: 0.07em;
      font-weight: 600;
    }
  }
`;
