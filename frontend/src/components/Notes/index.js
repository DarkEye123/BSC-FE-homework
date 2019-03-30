import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { CenteredMain as Page, ErrorMessage, NoteModal } from '..';
import VisuallyHidden from '@reach/visually-hidden';
import { useTranslation } from 'react-i18next';
import { NOTES_QUERY, DELETE_NOTE_MUTATION, CREATE_NOTE_MUTATION, UPDATE_NOTE_MUTATION } from '../../resolvers';
import { Grid, Background, AddNote, Panel } from './styles';
import Note from './Note';
import Trash from './Trash';

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
  const { t } = useTranslation();

  const [noteID, setNoteID] = useState(null);
  const [noteText, setNoteText] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [onConfirm, setOnConfirm] = useState(null);

  const { data, error, loading } = useQuery(NOTES_QUERY, { fetchPolicy: 'cache-and-network' });
  const deleteNoteMutation = useMutation(DELETE_NOTE_MUTATION, {
    variables: { id: noteID },
    update: deleteUpdate,
    optimisticResponse: { deleteNote: { id: noteID, __typename: 'Note' } },
  });
  const createNoteMutation = useMutation(CREATE_NOTE_MUTATION, {
    update: createUpdate,
  });
  const updateNoteMutation = useMutation(UPDATE_NOTE_MUTATION);

  const mutateCreate = async text => {
    try {
      await createNoteMutation({
        variables: { text },
        optimisticResponse: { createNote: { id: noteID, text, __typename: 'Note' } },
      });
    } catch (e) {}
  };
  const mutateUpdate = id => async text => {
    try {
      await updateNoteMutation({
        variables: { id, text },
        optimisticResponse: { updateNote: { id, text, __typename: 'Note' } },
      });
    } catch (e) {}
  };

  const handleStop = async e => {
    setNoteID(null);
    const targetName = e.target.getAttribute('name');
    if (targetName) {
      deleteNoteMutation()
        .then()
        .catch(() => {});
    }
  };
  const handleDoubleClick = note => () => {
    setOnConfirm(() => mutateUpdate(note.id));
    setShowModal(true);
    setNoteText(note.text);
    setNoteID(note.id);
  };
  const handleAddNote = () => {
    setOnConfirm(() => mutateCreate);
    setShowModal(true);
  };
  const onDismiss = () => {
    setNoteText(null);
    setNoteID(null);
    setShowModal(false);
  };

  if (loading) {
    return (
      <Page>
        <p>{t('Loading')}</p>
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
            <Note
              key={note.id}
              onDoubleClick={handleDoubleClick(note)}
              note={note}
              onStart={() => setNoteID(note.id)}
              onStop={handleStop}
            />
          ))}
        </Grid>
      </Background>
      <Panel>
        <Trash name="trash" />
        <AddNote onClick={handleAddNote}>
          <VisuallyHidden>{t('New Note')}</VisuallyHidden>+
        </AddNote>
      </Panel>
      <NoteModal text={noteText} isOpen={showModal} onDismiss={onDismiss} onConfirm={onConfirm} />
    </Page>
  );
};

export default Notes;
