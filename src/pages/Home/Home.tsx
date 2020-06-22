import React from 'react';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

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
          <Link to="/login">
            <Button>login</Button>
          </Link>
          <Link to="/signup">
            <Button>sign up</Button>
          </Link>
        </section>
        
      </Content>
    </Container>
  );
};

export default Home;
