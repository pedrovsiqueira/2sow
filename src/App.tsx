import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks/index';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
