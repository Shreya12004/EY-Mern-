import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model('donation', donationSchema);
