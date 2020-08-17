import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Login from '../../pages/Login/Login';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();
// Mock atribuir valores fictícios para variáveis/funções
// jest.fn é uma função vazia que serve só para saber se ela foi chamada ou não

jest.mock('../../hooks/toast.tsx', () => ({
  useToast: () => ({
    addToast: mockedAddToast,
  }),
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    goBack: jest.fn(),
    push: mockedHistoryPush,
  }),
}));

jest.mock('../../hooks/auth.tsx', () => ({
  useAuth: () => ({
    signIn: mockedSignIn,
  }),
}));

describe('Login Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('renders without crashing', () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });

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

  it('should return an error trying to login with invalid credentials', async () => {
    const { getByTestId } = render(<Login />);

    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');
    const buttonElement = getByTestId('login');

    fireEvent.change(emailField, {
      target: { value: 'not-valid-invalid' },
    });
    fireEvent.change(passwordField, {
      target: { value: 'invalid' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if login fails', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

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
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      );
    });
  });
});
