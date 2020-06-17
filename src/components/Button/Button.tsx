import React, {ButtonHTMLAttributes} from 'react';
import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <StyledButton data-testid="button" {...rest}>{children}</StyledButton>
);
export default Button;
