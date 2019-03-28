import signIn from './mutations/signIn';
import logout from './mutations/logout';
import { forwardTo } from 'prisma-binding';

const Mutation = { signIn, logout, deleteNote: forwardTo('prisma') };

export default Mutation;
