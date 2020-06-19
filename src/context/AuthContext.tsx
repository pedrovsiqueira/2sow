import React, { createContext, useCallback } from 'react';
//context utilizado para pegar informações do user

interface AuthContextData {
  name: string;
  signIn(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {}, []);

  return (
    <AuthContext.Provider value={{ name: '', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
