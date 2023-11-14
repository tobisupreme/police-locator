import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6969;

app.get('/', (req: Request, res: Response) => {
  res.send('We outhere!');
});


app.listen(port, () => {
  console.log(`[${new Date().toTimeString()}]: ⚡ Server is runnfing on ${port}`);
})
