import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Navbar from './Navbar';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
    </div>
  </ThemeProvider>
);

export default App;
