import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact  — save a message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: 'All fields are required.' });

  try {
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, contact });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message.' });
  }
});

// GET /api/contact  — view all messages (admin)
router.get('/', async (req, res) => {
  const messages = await Contact.find().sort('-createdAt');
  res.json(messages);
});

export default router;