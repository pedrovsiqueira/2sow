import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

//context utilizado para pegar informações do user

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const [data, setData] = useState<AuthState>(() => {
  const token = localStorage.getItem('2sow:token');
  const user = localStorage.getItem('2sow:user');

  if (token && user) {
    return { token, user: JSON.parse(user) };
  }

  return {} as AuthState;
});

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('signin', {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem('2sow:token', token);
    localStorage.setItem('2sow:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
