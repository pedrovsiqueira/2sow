import React from 'react';
import { Container } from './styles';
import editIcon from '../../assets/edit-icon.svg';
import trashIcon from '../../assets/trash-icon.svg';
import api from '../../services/api'

const Card: React.FC = ({ children }) => {
  const cardResults = api.get('/usuarios')
  return (
    <Container>
      <main>
        <h3>Pedro siqueira</h3>
        <img src={editIcon} alt="edit icon" />
      </main>

      <p>043.529.261-75</p>
      <p>pedro@gmail.com</p>

      <section>
        <p>Goiânia/Go</p>
        <img src={trashIcon} alt="trash icon" />
      </section>
    </Container>
  );
};

export default Card;
