import React, { useContext } from 'react';
import Button from '../../components/Button/Button';
import Input2 from '../../components/Input/Input2';
import { Context } from '../../FormContext';

const SignUp: React.FC = () => {
  const { inputValues, setInputValues, handleUserSignUP } = useContext(Context);
  return (
    <form onSubmit={handleUserSignUP}>
      <Input2 type="text" placeholder="example@x2listings.com"></Input2>
      <Input2 type="text" placeholder="example@x2listings.com"></Input2>
      <Input2 type="password" placeholder="******"></Input2>
      <Button></Button>
    </form>
  );
};

export default SignUp;
