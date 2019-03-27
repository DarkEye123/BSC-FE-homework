import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import theme from './theme';
import { NavBar, Login, Page } from './components';
import createClient from './client';

const client = createClient();

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Page />
          <NavBar />
          <Login />
        </div>
      </ThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default App;
