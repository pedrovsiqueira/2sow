import React from 'react';
import Login from '../../pages/Login/Login';
import { render } from '@testing-library/react';

//Mock atribuir valores fictícios para variáveis/funções
//jest.fn é uma função vazia que serve só para saber se ela foi chamada ou não

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      goBack: jest.fn(),
    }),
  };
});

describe('Login Page', () => {
  it('should be able to log in', () => {
    const { debug } = render(<Login />);
    debug();
  });
});
