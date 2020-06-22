import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

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
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = async (data: inputValuesDTO) => {
    const { nome, cpf, email, cep, rua, numero, bairro, cidade } = data;

    console.log(data);
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
    try {
      const response = await api.post('usuarios', newUser);
      console.log(response);
      history.push('/users');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input type="text" placeholder="nome" name="nome" />
      <Input type="text" placeholder="cpf" name="cpf" />
      <Input type="text" placeholder="email" name="email" />
      <Input type="text" placeholder="cep" name="cep" />
      <Input type="text" placeholder="rua" name="rua" />
      <Input type="number" placeholder="numero" name="numero" />
      <Input type="text" placeholder="bairro" name="bairro" />
      <Input type="text" placeholder="cidade" name="cidade" />
      <Button>inserir</Button>
    </Form>
  );
};

export default InsertUser;
