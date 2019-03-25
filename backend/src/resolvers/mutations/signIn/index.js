import bcrypt from 'bcryptjs';
import { assignJWTToken } from '../../utils';
import { AppErr } from '../../errors';

function verifyPassword(password, hash) {
  const passwordIsSame = bcrypt.compareSync(password, hash);
  if (!passwordIsSame) {
    throw AppErr("passwords don't match (ಠ_ಠ)");
  }
}

async function signIn(parent, { email }, ctx, info) {
  registeredUser = await ctx.db.query.user({ where: { email } }, info);
  assignJWTToken(ctx.request.session, registeredUser.id);
  return registeredUser;
}

export default signIn;
