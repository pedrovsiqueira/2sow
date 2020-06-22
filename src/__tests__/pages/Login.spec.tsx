import React from 'react';
import Login from '../../pages/Login/Login';
import { render, fireEvent, wait } from '@testing-library/react';
const mockedHistoryPush = jest.fn();

//Mock atribuir valores fictícios para variáveis/funções
//jest.fn é uma função vazia que serve só para saber se ela foi chamada ou não

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      goBack: jest.fn(),
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('../../hooks/auth.tsx', () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
    }),
  };
});

describe('Login Page', () => {
  it('should be able to log in', async () => {
    const { getByTestId } = render(<Login />);

    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');
    const buttonElement = getByTestId('login');

    fireEvent.change(emailField, {
      target: { value: 'pedrosiqueira@gmail.com' },
    });
    fireEvent.change(passwordField, {
      target: { value: '123456' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/users');
    });
  });

});
