import gql from 'graphql-tag';

const LOGOUT_MUTATION = gql`
  mutation LOGOUT_MUTATION {
    logout
  }
`;

export default LOGOUT_MUTATION;
