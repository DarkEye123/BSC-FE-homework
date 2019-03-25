import { and, shield } from 'graphql-shield';
import { isNoteOwner } from './notes';
import isAuthenticatedUser from './auth';

const rules = {
  isAuthenticatedUser,
  isNoteOwner,
};

const permissions = shield({});

export { permissions, rules };
