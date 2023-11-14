import express, { Express, Request, Response } from 'express';
import config from 'config';
import connectDb from '../config/db';
import copsRouter from './routes/cops.routes';

const app: Express = express();
app.use('/cops', copsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express with TypeScript!');
});

const port = config.get('app.port');
connectDb(config.get('db.url'))
  .then(() => {
    app.listen(port, () => {
      console.log(
        `⚡ [${new Date().toTimeString()}]: Server is running on ${port}`
      );
    });
  })
  .catch((err) => {
    console.error('Oops, something went wrong!', err);
    process.exit(1);
  });
