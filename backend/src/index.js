import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import './env';
import createServer from './createServer';
import parseUserID from './middleware/userID';
import cookieSession from './middleware/cookie';

const server = createServer();
server.use(helmet());
server.use(cookieSession);
server.use(cookieParser());
server.use(parseUserID);

server.start(
  {
    // allow a communication from these urls
    cors: { credentials: true, origin: [process.env.FRONTEND_URL, process.env.BACKED_URL, process.env.PLAYGROUND_URL] },
  },
  app => {
    console.log(`Server is now running on: http://localhost:${app.port}`);
  }
);
