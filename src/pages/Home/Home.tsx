import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

import Button from '../../components/Button/Button';

const Home = () => (
  <Container>
    <Content>

      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <h1>Seja bem vindo.</h1>

      <section>
        <Link to="/login">
          <Button>entrar</Button>
        </Link>
        <Link to="/signup">
          <Button>cadastrar</Button>
        </Link>
      </section>

    </Content>
  </Container>
);

export default Home;
