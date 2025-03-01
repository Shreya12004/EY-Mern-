import express from 'express';
import Donation from '../models/donation';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, amount } = req.body;

    if (!name || !email || amount <= 0) {
      return res.status(400).json({ message: 'Invalid donation data' });
    }
    const newDonation = new Donation({ name, email, amount });
    await newDonation.save();
    console.log(`Donation received: ${name} donated ${amount} Rs.`);
    res.status(201).json({ message: 'Donation successful! 🎉' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
