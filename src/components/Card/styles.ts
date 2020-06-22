import styled from 'styled-components';

export const Container = styled.article`
  width: 334px;
  background: #ecf0f3;
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
  border-radius: 17px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 0 auto;

  img {
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      filter: saturate(250%);
      transition: all 0.2s ease;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;

    h3 {
      font-size: 2rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  section {
    p {
      margin: 15px 0;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > p {
      letter-spacing: 0.07em;
      font-weight: 600;
    }
  }
`;
