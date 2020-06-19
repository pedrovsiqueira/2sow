import React, { useCallback, useRef } from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { Container } from './styles';
import { Form } from '@unform/web';
import { FiAlertCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(5, 'Mínimo 5 digitos'),
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
      <main>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h1>Seja bem vindo.</h1>
      </main>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <section>
          <section>
            <label htmlFor="email">e-mail</label>
            <Input
              icon={FiAlertCircle}
              name="email"
              placeholder="exemplo@gmail.com"
            />
          </section>
          
          <section>
            <label htmlFor="password">password</label>
            <Input
              icon={FiAlertCircle}
              name="password"
              type="password"
              placeholder="******"
            />
          </section>
        </section>
        <div>
          <Button>login</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
