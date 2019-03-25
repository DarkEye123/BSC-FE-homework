import { rule } from 'graphql-shield';

const isNoteOwner = rule({ cache: 'strict' })(async (parent, { where: { id } }, ctx) => {
  const { userID } = ctx.request;
  try {
    const res = await ctx.prisma.query.note({ where: { id } }, `{owner{id}}`);
    return res.owner.id === userID;
  } catch (e) {
    return false;
  }
});

export { isNoteOwner };
