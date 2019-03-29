import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { CenteredMain as Page, ErrorMessage } from '..';
import VisuallyHidden from '@reach/visually-hidden';
import { NOTES_QUERY, DELETE_NOTE_MUTATION, CREATE_NOTE_MUTATION } from '../../resolvers';
import {
  Grid, Background, AddNote, Panel,
} from './styles';
import Note from './Note';
import Trash from './Trash';

const handleDelete = (mutation) => {
  mutation()
    .then()
    .catch((e) => {});
};

const deleteUpdate = (cache, { data }) => {
  const newDataSet = { notes: null };
  const deletedNote = data.deleteNote.id;
  const oldData = cache.readQuery({ query: NOTES_QUERY });
  newDataSet.notes = oldData.notes.filter(element => element.id !== deletedNote);
  cache.writeQuery({ query: NOTES_QUERY, data: newDataSet });
};

const createUpdate = (cache, { data }) => {
  const createdNote = data.createNote;
  const cachedData = cache.readQuery({ query: NOTES_QUERY });
  cachedData.notes.push(createdNote);
  cache.writeQuery({ query: NOTES_QUERY, data: cachedData });
};

const Notes = () => {
  const { data, error, loading } = useQuery(NOTES_QUERY);
  const [noteID, setNoteID] = useState(null);
  const [noteText, setNoteText] = useState(null);
  const deleteDataMutation = useMutation(DELETE_NOTE_MUTATION, {
    variables: { id: noteID },
    update: deleteUpdate,
    optimisticResponse: { deleteNote: { id: noteID, __typename: 'Note' } },
  });
  const createNoteMutation = useMutation(CREATE_NOTE_MUTATION, {
    // variables: { text: noteText },
    variables: { text: 'test' },
    update: createUpdate,
    optimisticResponse: { createNote: { id: noteID, text: noteText, __typename: 'Note' } },
  });

  const handleStop = async (e) => {
    setNoteID(null);
    const targetName = e.target.getAttribute('name');
    if (targetName) {
      await deleteDataMutation();
    }
  };
  const handleCreateNote = async () => {
    setNoteText('test');
    try {
      await createNoteMutation();
    } catch (e) {}
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
  return (
    <Page>
      <Background>
        <Grid data-testid="grid">
          {data.notes.map(note => (
            <Note key={note.id} note={note} onStart={() => setNoteID(note.id)} onStop={handleStop} />
          ))}
        </Grid>
      </Background>
      <Panel>
        <Trash name="trash" />
        <AddNote onClick={handleCreateNote} name="trash">
          <VisuallyHidden>New Note</VisuallyHidden>+
        </AddNote>
      </Panel>
    </Page>
  );
};

export default Notes;
