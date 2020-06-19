import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from '../src/context/AuthContext';

function App() {
  return (
    <>
      <AuthContext.Provider value={{name: ''}}>
        <Router>
          <Routes />
        </Router>
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
