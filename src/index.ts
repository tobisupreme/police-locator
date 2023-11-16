import express, { Express, Request, Response } from 'express';
import config from 'config';
import connectDb from '../config/db';
import consolidate from 'consolidate';
import civiliansRouter from './routes/civilians.routes';
import copsRouter from './routes/cops.routes';

const app: Express = express();

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.use(express.static('./src/public'));
app.set('views', './src/views');
app.set('view engine', 'html');
app.engine('html', consolidate.handlebars);

app.use(civiliansRouter);
app.use(copsRouter);

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
