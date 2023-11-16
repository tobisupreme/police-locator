import { Request, Response, Router } from 'express';
import { fetchAllCops, fetchNearestCops } from '../controllers/cops.controller';

const router = Router();

router.get('/cops', async (req: Request, res: Response) => {
  const latitude = Number(req.query.lat);
  const longitude = Number(req.query.lng);
  const cops =
    latitude && longitude
      ? await fetchNearestCops([longitude, latitude], 2000)
      : await fetchAllCops();
  return res.json({
    cops,
  });
});

router.get('/cop.html', async (req: Request, res: Response) => {
  return res.render('cop.html', {
    userId: req.query.userId,
  });
});

export default router;
