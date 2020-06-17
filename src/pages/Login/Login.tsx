import React from 'react';
import Input from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import {Container} from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <form>
        <Input />
        <Input />
        <Button>login</Button>
      </form>
    </Container>
  );
};

export default Login;
