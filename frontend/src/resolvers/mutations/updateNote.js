import gql from 'graphql-tag';

const UPDATE_NOTE_MUTATION = gql`
  mutation UPDATE_NOTE_MUTATION($id: ID!, $text: String!) {
    updateNote(data: { text: $text }, where: { id: $id }) {
      id
      text
    }
  }
`;

export default UPDATE_NOTE_MUTATION;
