import { forwardTo } from 'prisma-binding';
import activeUser from './queries/currentUser';
import notes from './queries/notes';

const Query = { activeUser, note: forwardTo('prisma'), notes };

export default Query;
