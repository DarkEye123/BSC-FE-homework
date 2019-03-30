/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MockLink } from 'apollo-link-mock';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import TestThemeProvider from './TestThemeProvider';

function createClient(mocks) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new MockLink(mocks),
  });
}

function createPage(client, children) {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <TestThemeProvider>{children}</TestThemeProvider>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export { createClient, createPage };
