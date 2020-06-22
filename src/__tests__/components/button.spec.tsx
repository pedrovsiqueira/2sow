import React from 'react';
import Button from './../../components/Button/Button';
import { render, cleanup } from '@testing-library/react';

beforeEach(cleanup)

it('Renders a button checking props without crashing', () => {
  const { getByText } = render(<Button>My Button Test</Button>);
  expect(getByText('My Button Test')).toBeDefined()
});