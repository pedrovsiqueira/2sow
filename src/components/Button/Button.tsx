import React from 'react';
import { StyledButton } from './styles';

const Button: React.FC = ({ children }) => (
  <StyledButton data-testid="button">{children}</StyledButton>
);
export default Button;
