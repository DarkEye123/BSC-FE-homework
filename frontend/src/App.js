import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactModal from 'react-modal';
import theme from './theme';
import { NavBar, Page } from './components';
import createClient from './client';
import Routes from './routes';

const client = createClient();

ReactModal.setAppElement('#root');

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Page />
            <NavBar />
            <Routes />
          </div>
        </Router>
      </ThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default App;
