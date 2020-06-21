import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

//context utilizado para pegar informações do user

interface AuthState {
  accessToken: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('2sow:accessToken');
    const user = localStorage.getItem('2sow:user');

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('signin', {
      email,
      password,
    });

    const { data } = await api.get(`users?email=${email}`);

    const user = {
      userEmail: data[0].email,
      userId: data[0].id,
      userPassword: data[0].password,
    };

    const { accessToken } = response.data;

    localStorage.setItem('2sow:accessToken', accessToken);
    localStorage.setItem('2sow:user', JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signOut = useCallback(() => {
    const accessToken = localStorage.removeItem('2sow:accessToken');
    const user = localStorage.removeItem('2sow:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
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
