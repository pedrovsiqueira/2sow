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
      <main>
        <h3>{nome}</h3>
        <img src={editIcon} alt="edit icon" />
      </main>

      <p>{cpf}</p>
      <p>{email}</p>

      <section>
        <p>{endereco.cidade}</p>
        <img onClick={() => deleteUser(id)} src={trashIcon} alt="trash icon" />
      </section>
    </Container>
  );
};

export default Card;
