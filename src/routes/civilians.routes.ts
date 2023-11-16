import { Request, Response, Router } from 'express';

const router = Router();

router.get('/civilian.html', async (req: Request, res: Response) => {
  return res.render('civilian.html', {
    userId: req.query.userId,
  });
});

export default router;
