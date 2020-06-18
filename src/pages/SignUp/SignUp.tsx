import React, { useCallback, useRef } from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { Container } from './styles';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Confirme seu e-mail')
          .email('Digite um e-mail válido'),
        confirmEmail: Yup.string()
          .required('Confirme seu e-mail')
          .email('Digite um e-mail válido')
          .oneOf([Yup.ref('email')], 'Emails precisam ser iguais'),
        password: Yup.string().min(5, 'No mínimo 5 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <h1>Seja bem vindo.</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <section>
          <label htmlFor="email">e-mail</label>
          <Input name="email" placeholder="exemplo@gmail.com" />

          <label htmlFor="confirmEmail">confirme o e-mail</label>
          <Input name="confirmEmail" placeholder="exemplo@gmail.com" />

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
