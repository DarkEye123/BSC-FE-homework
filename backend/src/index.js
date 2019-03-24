import helmet from 'helmet';
import './env';
import createServer from './createServer';

const server = createServer();
server.use(helmet());

server.start(
  {
    // allow a communication from these urls
    cors: { credentials: true, origin: [process.env.FRONTEND_URL, process.env.BACKED_URL, process.env.PLAYGROUND_URL] },
  },
  app => {
    console.log(`Server is now running on: http://localhost:${app.port}`);
  }
);
