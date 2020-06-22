import React from 'react';
import { Container } from './styles';
import editIcon from '../../assets/edit-icon.svg';
import trashIcon from '../../assets/trash-icon.svg';
import { Link } from 'react-router-dom';

interface EnderecoProps {
  cidade: string;
}

export interface CardData {
  nome: string;
  cpf: string;
  email: string;
  id: number;
  endereco: EnderecoProps;
  handleEdit: (id: number) => void;
  handleModal: (boolean: boolean, id: number) => void;
}

const Card: React.FC<CardData> = ({
  nome,
  cpf,
  email,
  endereco,
  id,
  handleEdit,
  handleModal
}) => {
  return (
    <Container>
      <header>
        <h3>{nome}</h3>
        <Link to={`/users/edit/${id}`}>
          <img src={editIcon} alt="edit icon" />
        </Link>
      </header>

      <section>
        <p>{cpf}</p>
        <p>{email}</p>
      </section>

      <footer>
        <p>{endereco.cidade}</p>
        <img
          onClick={() => handleModal(true, id)}
          src={trashIcon}
          alt="trash icon"
        />
      </footer>
    </Container>
  );
};

export default Card;
