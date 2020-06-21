import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks/index';

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
