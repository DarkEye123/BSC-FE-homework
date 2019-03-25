import { verify } from 'jsonwebtoken';

// See express.RequestHandler
function parseUserID(req, res, next) {
  if (!req.session) {
    next();
  } else {
    const { token } = req.session;
    if (token) {
      const { userID } = verify(token, process.env.APP_SECRET);
      req.userID = userID;
    }
    next();
  }
}

export default parseUserID;
