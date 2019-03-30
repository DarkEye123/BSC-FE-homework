import { forwardTo } from 'prisma-binding';
import signIn from './mutations/signIn';
import logout from './mutations/logout';
import createNote from './mutations/createNote';

const Mutation = {
  signIn,
  logout,
  createNote,
  deleteNote: forwardTo('prisma'),
  updateNote: forwardTo('prisma'),
};

export default Mutation;
