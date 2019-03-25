import { rule } from 'graphql-shield';

const isAuthenticatedUser = rule({ cache: 'contextual' })((parent, args, ctx) => {
  const id = ctx.request.userID;
  if (!id) {
    return false;
  }
  return true;
});

export { isAuthenticatedUser };
