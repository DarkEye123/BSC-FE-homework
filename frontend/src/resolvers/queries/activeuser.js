import gql from 'graphql-tag';

const ACTIVE_USER_QUERY = gql`
  query ACTIVE_USER_QUERY {
    activeUser {
      id
      email
    }
  }
`;

export default ACTIVE_USER_QUERY;
