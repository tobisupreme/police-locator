import { model, Schema } from 'mongoose';

type Location = {
  type: string;
  address: string;
  coordinates: number[];
};

interface ICop {
  userId: string;
  displayName: string;
  phone: string;
  email: string;
  earnedRatings: number;
  totalRatings: number;
  location: Location;
}

const copSchema: Schema = new Schema<ICop>({
  userId: { type: String, unique: true, trim: true, required: true },
  displayName: { type: String, trim: true },
  phone: { type: String },
  email: { type: String, unique: true },
  earnedRatings: { type: Number },
  totalRatings: { type: Number },
  location: {
    type: { type: String },
    address: { type: String },
    coordinates: [Number],
  },
});
copSchema.index({ location: '2dsphere' });

export default model<ICop>('Cop', copSchema);
