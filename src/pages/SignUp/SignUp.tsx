import React, { useContext, forwardRef } from 'react';
import Button from '../../components/Button/Button';
import Input2 from '../../components/Input/Input2';
import { Context } from '../../FormContext';

interface InputRefDTO {}

interface FormProps {
  
}

const SignUp: React.RefForwardingComponent<InputRefDTO, FormProps> = (
  props,
  ref
) => {
  const { inputValues, setInputValues, handleUserSignUP } = useContext(Context);

  return <form onSubmit={handleUserSignUP}></form>;
};

export default forwardRef(SignUp);
