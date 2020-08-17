import React, { createContext, useCallback, useState, useContext } from 'react';
import {api} from '../services/api';

//context utilizado para pegar informações do user

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
  const token = localStorage.getItem('2sow:token');

    // if (token) {
    //   return { token };
    // }

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem('2sow:token', token);

    setData({ token });
  }, []);

  // const signIn = useCallback(async ({ email, password }) => {
  //   const response = await api.post('/auth/login', {
  //     email,
  //     password,
  //   });

  //   const { token } = response.data;

  //   localStorage.setItem('2sow:token', token);

  //   setData({ token });
  // }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('2sow:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
