import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo-hooks';
import { CenteredMain as Page, ErrorMessage } from '..';
import { NOTES_QUERY } from '../../resolvers';
import { Grid, Note } from './styles';

const Notes = () => {
  const { data, error, loading } = useQuery(NOTES_QUERY);
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
      <Grid data-testid="grid">
        {data.notes.map(note => (
          <Note key={note.id}>{note.text}</Note>
        ))}
      </Grid>
    </Page>
  );
};

export default Notes;
