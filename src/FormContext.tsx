import React, { createContext, useState } from 'react';

interface inputValueDTO {
  email: string;
  password: string;
}

const Context = createContext({
  inputValues: { email: '', password: '' },
  setInputValues: (inputValues: inputValueDTO) => {},
  handleUserSignUP: () => {},
  handleUserInsert: () => {},
});

const ContextProvider: React.FC = ({ children }) => {
  const [inputValues, setInputValues] = useState<inputValueDTO>({
    email: '',
    password: '',
  });

  const handleUserSignUP = () => {};

  const handleUserInsert = () => {};

  return (
    <Context.Provider
      value={{
        inputValues,
        setInputValues,
        handleUserSignUP,
        handleUserInsert,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
