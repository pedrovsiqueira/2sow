import React from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { Container } from './styles';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  return (
    <Container>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <h1>Seja bem vindo.</h1>
      <form>
        <section>
          <label htmlFor="email">e-mail</label>
          <Input name="email" type="email" placeholder="exemplo@gmail.com" />

          <label htmlFor="confirm-email">confirme o e-mail</label>
          <Input
            name="confirm-email"
            type="email"
            placeholder="exemplo@gmail.com"
          />

          <label htmlFor="password">password</label>
          <Input name="password" type="password" placeholder="******" />
        </section>
        <div>
          <Button>Sign Up</Button>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
