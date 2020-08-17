import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Logout: React.FC<ButtonProps> = (props) => (
  <Container>
    <button {...props}>log out</button>
  </Container>
);

export default Logout;
