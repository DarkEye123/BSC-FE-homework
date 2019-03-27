import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';

function createClient() {
  return new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_URL,
    fetch,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
      });
    },
  });
}

export default createClient;
