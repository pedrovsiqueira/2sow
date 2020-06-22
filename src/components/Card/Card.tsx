import React, { useEffect } from 'react';
import { Container } from './styles';
import editIcon from '../../assets/edit-icon.svg';
import trashIcon from '../../assets/trash-icon.svg';
import { editUser, deleteUser } from '../../services/users';

interface EnderecoProps {
  cidade: string;
}

export interface CardData {
  nome: string;
  cpf: string;
  email: string;
  id: number;
  endereco: EnderecoProps;
}

const Card: React.FC<CardData> = ({ nome, cpf, email, endereco, id }) => {
  return (
    <Container>
      <header>
        <h3>{nome}</h3>
        <img src={editIcon} alt="edit icon" />
      </header>

      <section>
        <p>{cpf}</p>
        <p>{email}</p>
      </section>

      <footer>
        <p>{endereco.cidade}</p>
        <img onClick={() => deleteUser(id)} src={trashIcon} alt="trash icon" />
      </footer>
    </Container>
  );
};

export default Card;
