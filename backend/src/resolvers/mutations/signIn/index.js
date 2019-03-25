import bcrypt from 'bcryptjs';
import { assignJWTToken } from '../../utils';
import { AppErr } from '../../errors';

function verifyPassword(password, hash) {
  const passwordIsSame = bcrypt.compareSync(password, hash);
  if (!passwordIsSame) {
    throw new AppErr("passwords don't match (ಠ_ಠ)");
  }
}

async function signIn(parent, { email, password }, ctx, info) {
  const registeredUser = await ctx.prisma.query.user({ where: { email } }, info);
  if (!registeredUser) {
    throw new AppErr("user doesn't exist t(-.-t)");
  }
  const realUser = await ctx.prisma.query.user({ where: { email } }, '{password}');
  verifyPassword(password, realUser.password);
  assignJWTToken(ctx.request.session, registeredUser.id);
  return registeredUser;
}

export default signIn;
