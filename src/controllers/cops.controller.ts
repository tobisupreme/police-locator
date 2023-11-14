import Cop from '../models/cops.model';

export async function fetchNearestCops(
  coordinates: number[],
  maxDistance: number
) {
  try {
    const cop = await Cop.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: coordinates,
          },
          $maxDistance: maxDistance,
        },
      },
    });
    return cop;
  } catch (error) {
    console.error('🚀 ~ fetchNearestCops ~ error:', error);
    return null;
  }
}

export async function fetchAllCops() {
  try {
    const cops = await Cop.find();
    return cops;
  } catch (error) {
    console.error('🚀 ~ fetchAllCops ~ error:', error);
    return [];
  }
}
