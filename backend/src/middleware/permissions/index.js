import { and, shield } from 'graphql-shield';
import { isNoteOwner } from './notes';
import { isAuthenticatedUser } from './auth';

const rules = {
  isAuthenticatedUser,
  isNoteOwner,
};

const permissions = shield({
  Query: {
    note: and(rules.isAuthenticatedUser, rules.isNoteOwner),
    notes: and(rules.isAuthenticatedUser),
  },
  Mutation: {
    deleteNote: and(rules.isAuthenticatedUser, rules.isNoteOwner),
  },
});

export { permissions, rules };
