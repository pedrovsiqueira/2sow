import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useCallback,
} from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { api, apiViaCep } from '../../services/api';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container, StyledButton } from './styles';
import Nav from '../../components/Nav/Nav';

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
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

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

  const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length < 7) return;

    const { data } = await apiViaCep.get(`${value}/json`);

    setRua(data.logradouro);
    setBairro(data.bairro);
    setCidade(data.localidade);
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
            <Input label="cpf" type="text" placeholder="cpf" name="cpf" />
            <Input label="email" type="text" placeholder="email" name="email" />
          </fieldset>
          <fieldset>
            <legend>endereço</legend>
            <p>
              Atenção no preenchimento. Estas informações não poderão ser
              alteradas no futuro.
            </p>
            <Input
              handleChange={handleChange}
              label="cep"
              type="text"
              placeholder="cep"
              name="cep"
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
