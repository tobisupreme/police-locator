import express, { Express, Request, Response } from 'express';
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

export default app;
