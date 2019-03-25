import cookieSession from 'cookie-session';

const reqHandler = cookieSession({
  name: 'bsc-session',
  secret: process.env.COOKIE_SECRET,
  maxAge: 24 * 60 * 60 * 1000 * 30, // 30 days
  httpOnly: true,
});

export default reqHandler;
