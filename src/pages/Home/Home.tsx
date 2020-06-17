import React from 'react';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <Container>
      <Content>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h1>Seja bem vindo.</h1>
        <section>
          <Button>login</Button>
          <Button>sign up</Button>
        </section>
      </Content>
    </Container>
  );
};

export default Home;
