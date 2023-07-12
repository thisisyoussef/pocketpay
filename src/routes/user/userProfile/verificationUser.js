const express = require('express');
const router = express.Router();

// Verify User
router.put('/verifyUser/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { pin } = req.body;
  
      // Simulate user verification
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Verify user for email: ${email}`);
        console.log(`PIN: ${pin}`);
  
        // Simulate returning a response with verified user data
        const verifiedUser = {
          email: email,
          // Add other verified user properties here
        };
  
        res.status(200).json(verifiedUser);
      } else {
        console.log(`Failed to verify user for email: ${email}`);
        res.status(500).json({ message: 'Failed to verify user' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Check OTP
  router.get('/checkOTP/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { otp } = req.body;
  
      // Simulate OTP check
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Check OTP for email: ${email}`);
        console.log(`OTP: ${otp}`);
        res.status(200).json({ message: 'OTP check successful' });
      } else {
        console.log(`Failed to check OTP for email: ${email}`);
        res.status(500).json({ message: 'Failed to check OTP' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
  