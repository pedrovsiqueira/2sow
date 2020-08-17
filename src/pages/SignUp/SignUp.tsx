import React, { useCallback, useRef } from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { Container, GoBackStyled, ButtonSection } from './styles';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { useToast } from '../../hooks/toast';
import backIcon from '../../assets/back-icon.svg';

interface SignUpFormData {
  email: string;
  confirmEmail: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
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

        await api.post('/auth/signup', data);

        history.push('/login');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer o login',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
          title: 'Erro no cadastro',
        });
      }
    },
    [addToast, history]
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
              data-testid="email"
              label="email"
              name="email"
              placeholder="exemplo@gmail.com"
            />
          </section>

          <section>
            <Input
              data-testid="confirm-email"
              label="confirmar email"
              name="confirmEmail"
              placeholder="exemplo@gmail.com"
            />
          </section>

          <section>
            <Input
              data-testid="password"
              label="senha"
              name="password"
              type="password"
              placeholder="******"
            />
          </section>
        </section>

        <ButtonSection>
          <Button data-testid="sign-up">cadastrar</Button>
        </ButtonSection>
      </Form>
    </Container>
  );
};

export default SignUp;
