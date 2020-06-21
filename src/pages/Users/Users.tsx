import React, { useCallback } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import bwlogo from '../../assets/bwlogo.svg';
import Logout from '../../components/Logout/Logout';
import { Container } from './styles';

const Users: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {}, []);
  return (
    <Container>
      <nav>
        <figure>
          <img src={bwlogo} alt="bw logo" />
        </figure>

        <Logout onClick={handleSignOut} />
      </nav>
      <h1>this is my users page</h1>
    </Container>
  );
};

export default Users;
