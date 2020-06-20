import React, { useCallback, useRef, useContext } from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { Container } from './styles';
import { Form } from '@unform/web';
import { FiAlertCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useContext(AuthContext);
  console.log(user)

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn]
  );
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
