import { forwardTo } from 'prisma-binding';
import currentUser from './queries/currentUser';

const Query = { currentUser, note: forwardTo('prisma'), notes: forwardTo('prisma') };

export default Query;
