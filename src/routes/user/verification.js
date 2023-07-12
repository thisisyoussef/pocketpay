const express = require('express');
const router = express.Router();
// Check Pin
router.get('/checkPin/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { pin } = req.body;
  
      // Simulate checking pin
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Check Pin: email=${email}`);
  
        res.status(200).json({ message: 'Pin is valid' });
      } else {
        console.log(`Pin is invalid: email=${email}`);
        res.status(500).json({ message: 'Pin is invalid' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router;