import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { NavBar, Login } from './components';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar />
      <Login />
    </div>
  </ThemeProvider>
);

export default App;
