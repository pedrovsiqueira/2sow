import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
