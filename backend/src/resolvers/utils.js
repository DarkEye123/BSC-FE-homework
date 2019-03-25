import { sign } from 'jsonwebtoken';

function assignJWTToken(session, id) {
  const token = sign({ userID: id }, process.env.APP_SECRET);
  // eslint-disable-next-line no-param-reassign
  session.token = token;
}

export { assignJWTToken };
