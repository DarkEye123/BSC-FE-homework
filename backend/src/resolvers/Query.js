import { forwardTo } from 'prisma-binding';
import activeUser from './queries/currentUser';

const Query = { activeUser, note: forwardTo('prisma'), notes: forwardTo('prisma') };

export default Query;
