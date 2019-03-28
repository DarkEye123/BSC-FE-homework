import gql from 'graphql-tag';

const NOTES_QUERY = gql`
  query NOTES_QUERY {
    notes {
      id
      text
    }
  }
`;

export default NOTES_QUERY;
