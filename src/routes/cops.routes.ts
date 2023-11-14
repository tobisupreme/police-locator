import { Request, Response, Router } from 'express';
import { fetchAllCops, fetchNearestCops } from '../controllers/cops.controller';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
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

export default router;
