import React from 'react';
import SignUp from '../../pages/SignUp/SignUp';
import { render, fireEvent, wait } from '@testing-library/react';
const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();

//Mock atribuir valores fictícios para variáveis/funções
//jest.fn é uma função vazia que serve só para saber se ela foi chamada ou não

jest.mock('../../hooks/toast.tsx', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      goBack: jest.fn(),
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('../../services/api.ts', () => {
  return {
    api: {
      post: jest.fn(),
    },
  };
});

describe('SignUp Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('renders without crashing', () => {
    const { asFragment } = render(<SignUp />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be able to sign up', async () => {
    const { getByTestId } = render(<SignUp />);

    const emailField = getByTestId('email');
    const confirmEmailField = getByTestId('confirm-email');
    const passwordField = getByTestId('password');
    const buttonElement = getByTestId('sign-up');

    fireEvent.change(emailField, {
      target: { value: 'pedrosiqueira@gmail.com' },
    });

    fireEvent.change(confirmEmailField, {
      target: { value: 'pedrosiqueira@gmail.com' },
    });

    fireEvent.change(passwordField, {
      target: { value: '123456' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/login');
    });
  });

  it('should return an error trying to signUp with invalid credentials', async () => {
    const { getByTestId } = render(<SignUp />);

    const emailField = getByTestId('email');
    const confirmEmailField = getByTestId('confirm-email');
    const passwordField = getByTestId('password');
    const buttonElement = getByTestId('sign-up');

    fireEvent.change(emailField, {
      target: { value: 'not-valid-invalid' },
    });

    fireEvent.change(confirmEmailField, {
      target: { value: 'not-valid-invalid' },
    });

    fireEvent.change(passwordField, {
      target: { value: 'notvalid' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });
});
