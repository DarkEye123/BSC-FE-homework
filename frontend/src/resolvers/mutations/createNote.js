import gql from 'graphql-tag';

const CREATE_NOTE_MUTATION = gql`
  mutation CREATE_NOTE_MUTATION($text: String!) {
    createNote(text: $text) {
      id
      text
    }
  }
`;

export default CREATE_NOTE_MUTATION;
