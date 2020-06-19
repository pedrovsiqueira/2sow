import { createContext } from 'react';
//context utilizado para pegar informações do user

interface AuthContext {
  name: string;
}

const authContext = createContext<AuthContext>({} as AuthContext);

export default authContext;
