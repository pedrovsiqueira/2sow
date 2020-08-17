import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Content, Navigation } from './styles';
import bwlogo from '../../assets/bwlogo.svg';
import { useAuth } from '../../hooks/auth';
import Logout from '../../components/Logout/Logout';

const Nav: React.FC = () => {
  const { signOut } = useAuth();
  const activeStyle = {
    borderBottom: '2px solid #2A2A2A',
    fontWeight: 600,
  };

  return (
    <Container>
      <Content>
        <figure>
          <img src={bwlogo} alt="bw logo" />
        </figure>

        <Navigation>
          <NavLink exact to="/users" activeStyle={activeStyle}>
            listagem
          </NavLink>
          <NavLink to="/users/create" activeStyle={activeStyle}>
            adicionar usuário
          </NavLink>
          <Logout onClick={signOut} />
        </Navigation>

        <Logout onClick={signOut} />
      </Content>
    </Container>
  );
};

export default Nav;
