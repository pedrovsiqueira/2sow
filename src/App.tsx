import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
