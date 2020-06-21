import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../src/hooks/AuthContext';
import ToastContainer from './components/ToastContainer/ToastContainer';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
