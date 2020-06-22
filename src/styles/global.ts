import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html{
    font-size: 10px;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body{
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    color: #2A2A2A;
    width: 100vw;
    max-width: 100%;
    /* min-height: 100vh; */
    font-family: 'Work Sans', sans-serif;
    background-color: #ECF0F3;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  
  input, button{
    border: none;
  }

  button{
    cursor: pointer;
  }
  
  h1{
    font-size: 3.6rem;
    font-weight: 400;
  }

  legend {
    padding: 0;
    display: table;
  }
  fieldset {
    border: 0;
    padding: 0.01em 0 0 0;
    margin: 0;
    min-width: 0;
  }
  body:not(:-moz-handler-blocked) fieldset {
    display: table-cell;
  }
  `;
