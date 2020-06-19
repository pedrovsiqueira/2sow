import React, { createContext, useCallback } from 'react';
import api from '../services/api';

//context utilizado para pegar informações do user

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('users', {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log('cai no erro trouxa')
    }
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Pedro', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
