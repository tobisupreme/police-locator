import { createServer } from 'http';
import * as socketServer from './libs/socket-events';
import connectDb from '../config/db';
import config from 'config';
import app from './';

const server = createServer(app);

const port = config.get('app.port');
connectDb(config.get('db.url'))
  .then(() => {
    server.listen(port, () => {
      console.log(
        `⚡ [${new Date().toTimeString()}]: Server is running on ${port}`
      );
      socketServer.initialize(server);
    });
  })
  .catch((err) => {
    console.error('Oops, something went wrong!', err);
    process.exit(1);
  });
