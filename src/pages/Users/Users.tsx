import React, { useEffect, useState, ChangeEvent } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import bwlogo from '../../assets/bwlogo.svg';
import Logout from '../../components/Logout/Logout';
import { Container } from './styles';
import SearchInput from '../../components/Input/SearchInput/SearchInput';
import Card from '../../components/Card/Card';
import { CardData } from '../../components/Card/Card';

const Users: React.FC = () => {
  const [users, setUsers] = useState<CardData[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const handleApiRequest = async () => {
    const { data } = await api.get(`/usuarios/?q=${searchValue}`);
    setUsers(data);
  };

  useEffect(() => {
    handleApiRequest();
  }, [searchValue]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const { signOut } = useAuth();

  return (
    <Container>
      <nav>
        <figure>
          <img src={bwlogo} alt="bw logo" />
        </figure>

        <Logout onClick={signOut} />
      </nav>
      <main>
        <h1>listagem</h1>
        <p>Confira aqui a sua lista de usuários cadastrados</p>
        <SearchInput
          type="text"
          placeholder="Digite um nome"
          name="search"
          onChange={handleSearch}
        />
      </main>
      {users.map((card) => (
        <Card key={card.cpf} {...card} />
      ))}
    </Container>
  );
};

export default Users;
