async function notes(parent, args, ctx, info) {
  const { userID } = ctx.request;
  return ctx.prisma.query.notes({ where: { owner: { id: userID } }, ...args }, info);
}

export default notes;
