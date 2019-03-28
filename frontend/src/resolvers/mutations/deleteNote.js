import gql from 'graphql-tag';

const DELETE_NOTE_MUTATION = gql`
  mutation DELETE_NOTE_MUTATION($id: ID!) {
    deleteNote(where: { id: $id }) {
      id
    }
  }
`;

export default DELETE_NOTE_MUTATION;
