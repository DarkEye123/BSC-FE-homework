import bcrypt from 'bcryptjs';
import { assignJWTToken } from '../../utils';

function verifyPassword(password, hash) {
  const passwordIsSame = bcrypt.compareSync(password, hash);
  if (!passwordIsSame) {
    throw Error('password does not match');
  }
}

async function signIn(parent, { email }, ctx, info) {
  registeredUser = await ctx.db.query.user({ where: { email } }, info);
  assignJWTToken(ctx.request.session, registeredUser.id);
  return registeredUser;
}

export default signIn;
