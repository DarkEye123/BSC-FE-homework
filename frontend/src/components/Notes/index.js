import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { CenteredMain as Page, ErrorMessage } from '..';
import Draggable from 'react-draggable';
import { NOTES_QUERY, DELETE_NOTE_MUTATION } from '../../resolvers';
import { Grid, Note, Background } from './styles';
import Trash from './Trash';

const handleDelete = (mutation) => {
  mutation()
    .then()
    .catch((e) => {});
};

const updateNotes = (cache, { data }) => {
  const newDataSet = { notes: null };
  const deletedNote = data.deleteNote.id;
  const oldData = cache.readQuery({ query: NOTES_QUERY });
  newDataSet.notes = oldData.notes.filter(element => element.id !== deletedNote);
  cache.writeQuery({ query: NOTES_QUERY, data: newDataSet });
};

const Notes = () => {
  const { data, error, loading } = useQuery(NOTES_QUERY);
  const [noteID, setNoteID] = useState(null);
  const deleteDataMutation = useMutation(DELETE_NOTE_MUTATION, {
    variables: { id: noteID },
    update: updateNotes,
    optimisticResponse: { deleteNote: { id: noteID, __typename: 'Note' } },
  });
  const handleStop = async (e) => {
    setNoteID(null);
    const targetName = e.target.getAttribute('name');
    if (targetName) {
      await handle[targetName]();
    }
  };

  const handle = {
    trash: () => handleDelete(deleteDataMutation),
  };

  if (loading) {
    return (
      <Page>
        <p>Loading</p>
      </Page>
    );
  }
  if (error) {
    return (
      <Page>
        <ErrorMessage error={error} />;
      </Page>
    );
  }
  const { notes } = data;
  return (
    <Page>
      <Background>
        <Grid data-testid="grid">
          {notes.map(note => (
            <Draggable onStart={() => setNoteID(note.id)} onStop={handleStop} key={`${note.id}_draggable`}>
              <span>
                <Note>{note.text}</Note>
              </span>
            </Draggable>
          ))}
        </Grid>
      </Background>
      <Trash name="trash" />
    </Page>
  );
};

export default Notes;
