import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import donationRoutes from './routes/donations.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/donate', donationRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
app.get('/', (req, res) => {
  res.send('Welcome to the Crowdfunding API 🚀');
});
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
