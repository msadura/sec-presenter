import React from 'react';
import { ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import mainTheme from './themes/mainTheme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
