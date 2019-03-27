async function activeUser(parent, args, ctx, info) {
  const { userID } = ctx.request;
  if (!userID) {
    return null;
  }
  return ctx.prisma.query.user({ where: { id: userID } }, info);
}

export default activeUser;
