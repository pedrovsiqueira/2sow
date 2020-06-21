import React, { useCallback } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import bwlogo from '../../assets/bwlogo.svg';
import Logout from '../../components/Logout/Logout';
import { Container } from './styles';
import SearchInput from '../../components/Input/SearchInput/SearchInput';

const Users: React.FC = () => {
  const { signOut } = useAuth();

  const handleSearch = () => {};

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
          onChange={handleSearch}
          name="search"
        />
      </main>
    </Container>
  );
};

export default Users;
