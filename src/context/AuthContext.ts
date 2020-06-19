import { createContext } from 'react';
//context utilizado para pegar informações do user

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);



export default AuthContext;
