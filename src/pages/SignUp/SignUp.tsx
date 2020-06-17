import React, { useCallback } from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { Container } from './styles';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        confirmEmail: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(5, 'No mínimo 5 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <h1>Seja bem vindo.</h1>
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </Container>
  );
};

export default SignUp;
