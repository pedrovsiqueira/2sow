import React from 'react';
import Button from './../../components/Button/Button';
import { render, cleanup } from '@testing-library/react';

beforeEach(cleanup)

it('Renders a button checking props crashing', () => {
  const { getByText } = render(<Button>My Button Test</Button>);
  expect(getByText('My Button Test')).toBeDefined()
});

it('Verifies if a button was changed', () => {
  const {asFragment} = render(<Button>My Button Test</Button>)
  expect(asFragment()).toMatchSnapshot()
})