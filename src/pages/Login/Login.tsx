import React, { useCallback, useRef } from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { Container, GoBackStyled } from './styles';
import { Form } from '@unform/web';
import { FiAlertCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import backIcon from '../../assets/back-icon.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

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

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/users');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          description:
            'Ocorreu um erro ao fazer login, verifique as credenciais',
          title: 'Erro na autenticação',
        });
      }
    },
    [signIn, addToast, history]
  );
  return (
    <Container>
      <GoBackStyled onClick={history.goBack}>
        <img src={backIcon} alt="back icon" />
      </GoBackStyled>

      <main>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h1>Seja bem vindo.</h1>
      </main>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <section>
          <section>
            <Input
              icon={FiAlertCircle}
              label="email"
              name="email"
              placeholder="exemplo@gmail.com"
              data-testid="email"
            />
          </section>

          <section>
            <Input
              data-testid="password"
              label="senha"
              icon={FiAlertCircle}
              name="password"
              type="password"
              placeholder="******"
            />
          </section>
        </section>
        <div>
          <Button data-testid="login">entrar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
