import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: {
    type: String
  },
  heads: {
    type: Number
  },
  legs: {
      type: Number
  },
  sound: {
      type: String
  }
});

export default mongoose.model('Animal', animalSchema);
