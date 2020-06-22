import React, { ButtonHTMLAttributes } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Logout: React.FC<ButtonProps> = (props) => {
  return (
    <Container>
      <button {...props}>log out</button>
    </Container>
  );
};

export default Logout;
