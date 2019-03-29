async function createNote(parent, { text }, ctx, info) {
  const { userID } = ctx.request;
  return ctx.prisma.mutation.createNote({ data: { text, owner: { connect: { id: userID } } } }, info);
}

export default createNote;
