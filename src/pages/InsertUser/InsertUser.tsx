import React, { useState, ChangeEvent, useRef, useCallback } from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { api, apiViaCep } from '../../services/api';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container, StyledButton } from './styles';
import Nav from '../../components/Nav/Nav';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

import * as Yup from 'yup';

interface inputValuesDTO {
  nome: string;
  cpf: string;
  email: string;
  cep: string;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
}

const InsertUser = () => {
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');

  const handleSubmit = useCallback(async (data: inputValuesDTO) => {
    try {
      const { nome, cpf, email, cep, rua, numero, bairro, cidade } = data;

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        cpf: Yup.string().min(14, 'Mínimo 11 digitos'),
        nome: Yup.string().required('Nome obrigatório'),
        cep: Yup.string().min(9, 'Mínimo 8 digitos'),
        rua: Yup.string().required('Rua obrigatório'),
        numero: Yup.string().required('Número obrigatório'),
        bairro: Yup.string().required('Bairro obrigatório'),
        cidade: Yup.string().required('cidade obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const newUser = {
        nome,
        cpf,
        email,
        endereco: {
          cep,
          rua,
          numero,
          bairro,
          cidade,
        },
      };
      const response = await api.post('usuarios', newUser);
      history.push('/users');

      addToast({
        type: 'success',
        description: 'Usuário criado com sucesso',
        title: 'Sucesso na criação',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      window.scrollTo(0, 0);
      addToast({
        type: 'error',
        description:
          'Ocorreu um erro ao cadastrar o usuário, verifique servidor',
        title: 'Erro no servidor',
      });
    }
  }, []);

  const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const formattedValue = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

    setCep(formattedValue);

    if (value.length !== 9) return;

    const { data } = await apiViaCep.get(`${formattedValue}/json`);
    setRua(data.logradouro);
    setBairro(data.bairro);
    setCidade(data.localidade);
  }, []);

  const handleCpf = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');

    setCpf(formattedValue);
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <h2>Insira as informações nos campos abaixo</h2>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>dados pessoais</legend>
            <p>
              Atenção no preenchimento. Estas informações não poderão ser
              alteradas no futuro.
            </p>
            <Input label="nome" type="text" placeholder="nome" name="nome" />
            <Input
              onChange={handleCpf}
              label="cpf"
              type="text"
              placeholder="cpf"
              name="cpf"
              value={cpf}
            />
            <Input label="email" type="text" placeholder="email" name="email" />
          </fieldset>
          <fieldset>
            <legend>endereço</legend>
            <p>
              As informações a seguir poderão ser alteradas após serem
              inseridas.
            </p>
            <Input
              handleChange={handleChange}
              label="cep"
              type="text"
              placeholder="cep"
              name="cep"
              value={cep}
            />
            <Input
              defaultValue={rua}
              label="rua"
              type="text"
              placeholder="rua"
              name="rua"
            />
            <Input
              label="numero"
              type="number"
              placeholder="numero"
              name="numero"
            />
            <Input
              defaultValue={bairro}
              label="bairro"
              type="text"
              placeholder="bairro"
              name="bairro"
            />
            <Input
              defaultValue={cidade}
              label="cidade"
              type="text"
              placeholder="cidade"
              name="cidade"
            />
          </fieldset>
          <StyledButton>
            <Button>inserir</Button>
          </StyledButton>
        </Form>
      </Container>
    </>
  );
};

export default InsertUser;
