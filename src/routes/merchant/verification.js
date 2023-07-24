const express = require('express');
const router = express.Router();

// Check Pin
router.get('/merchant/checkPin/:email', (req, res) => {
  try {
    const { email } = req.params;

    // Validate input
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Mock response for successful pin check
    const pin = '1234'; // Replace with the expected pin for the provided email
    if (pin === req.query.pin) {
      return res.status(200).json({ message: 'Pin is correct' });
    } else {
      return res.status(400).json({ error: 'Invalid pin' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;