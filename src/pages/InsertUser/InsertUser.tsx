import React, { useState, ChangeEvent, FormEvent } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface inputValuesDTO {
  name: string;
  cpf: string;
  email: string;
  cep: string;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
}

const InsertUser = () => {
  const [inputValues, setInputValues] = useState<inputValuesDTO>({
    name: '',
    cpf: '',
    email: '',
    cep: '',
    rua: '',
    numero: 0,
    bairro: '',
    cidade: '',
  });

  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newUser = {
      name,
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
      await api.post('usuarios', newUser);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const { name, cpf, email, cep, rua, numero, bairro, cidade } = inputValues;
  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" value={name} handleChange={handleChange} />
      <Input name="cpf" value={cpf} handleChange={handleChange} />
      <Input name="email" value={email} handleChange={handleChange} />
      <Input name="cep" value={cep} handleChange={handleChange} />
      <Input name="rua" value={rua} handleChange={handleChange} />
      <Input name="numero" value={numero} handleChange={handleChange} />
      <Input name="bairro" value={bairro} handleChange={handleChange} />
      <Input name="cidade" value={cidade} handleChange={handleChange} />

      {/* {Object.keys(inputValues).map((item) => (
        <Input
          name={item}
          value={inputValues[item]}
          handleChange={handleChange}
          key={item}
        />
      ))} */}
      <Button>inserir</Button>
    </form>
  );
};

export default InsertUser;
