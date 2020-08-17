import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '../../components/Button/Button';

beforeEach(cleanup);

it('Renders a button checking props without crashing', () => {
  const { getByText } = render(<Button>My Button Test</Button>);
  expect(getByText('My Button Test')).toBeDefined();
});
