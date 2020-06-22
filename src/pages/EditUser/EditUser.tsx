import React, {
  useState,
  ChangeEvent,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import { api, apiViaCep } from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';
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

const EditUser = () => {
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { id } = useParams();
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  const handleSubmit = useCallback(async (data: inputValuesDTO) => {
    try {
      const { nome, cpf, email, cep, rua, numero, bairro, cidade } = data;

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cep: Yup.string().min(9, 'Mínimo 8 digitos'),
        rua: Yup.string().required('Rua obrigatório'),
        bairro: Yup.string().required('Bairro obrigatório'),
        cidade: Yup.string().required('cidade obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const editUser = {
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
      const response = await api.put(`usuarios/${id}`, editUser);
      history.push('/users');

      addToast({
        type: 'success',
        description: 'Usuário editado com sucesso',
        title: 'Sucesso na edição',
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

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`usuarios/${id}`);
      const { nome, cpf, email, endereco } = data;
      const { cep, rua, numero, bairro, cidade } = endereco;

      setBairro(bairro);
      setNome(nome);
      setCpf(cpf);
      setCidade(cidade);
      setNumero(numero);
      setEmail(email);
      setRua(rua);
      setCep(cep);
    })();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <h2>Insira as informações nos campos abaixo</h2>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>dados pessoais</legend>
            <Input
              disabled
              label="nome"
              type="text"
              placeholder="nome"
              name="nome"
              defaultValue={nome}
            />
            <Input
              label="cpf"
              type="text"
              placeholder="cpf"
              name="cpf"
              defaultValue={cpf}
              disabled
            />
            <Input
              disabled
              label="email"
              type="text"
              placeholder="email"
              name="email"
              defaultValue={email}
            />
          </fieldset>
          <fieldset>
            <legend>endereço</legend>
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
              defaultValue={numero}
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

export default EditUser;
