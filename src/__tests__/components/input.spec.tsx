import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Input from '../../components/Input/Input2';
import '@testing-library/jest-dom';
import 'jest-styled-components';

jest.mock('@unform/core', () => ({
  useField() {
    return {
      fieldname: 'email',
      defaultValue: '',
      error: '',
      registerField: jest.fn,
    };
  },
}));

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input label="email" name="email" placeholder="E-mail" />,
    );
    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render hightlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input label="email" name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const inputContainer = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await wait(() => {
      expect(inputContainer).toHaveStyle('border-color: #a6bba8');
    });

    fireEvent.blur(inputElement);
    await wait(() => {
      expect(inputContainer).not.toHaveStyle('border-color: #a6bba8');
    });
  });
});
