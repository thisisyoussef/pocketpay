const express = require('express');
const router = express.Router();
// Reset Password
router.put('/resetPassword/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { password } = req.body;
  
      // Simulate password reset
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Reset password for email: ${email}`);
        console.log(`New password: ${password}`);
        res.status(200).json({ message: 'Password reset successfully' });
      } else {
        console.log(`Failed to reset password for email: ${email}`);
        res.status(500).json({ message: 'Failed to reset password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Update Password
  router.put('/updatePassword', async (req, res) => {
    try {
      const { oldPassword, password } = req.body;
  
      // Simulate password update
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Old password: ${oldPassword}`);
        console.log(`New password: ${password}`);
        res.status(200).json({ message: 'Password updated successfully' });
      } else {
        console.log('Failed to update password');
        res.status(500).json({ message: 'Failed to update password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Generate PIN
  router.put('/generatePin/:email', async (req, res) => {
    try {
      const { email } = req.params;
  
      // Simulate PIN generation
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Generate PIN for email: ${email}`);
        res.status(200).json({ message: 'PIN generated successfully' });
      } else {
        console.log(`Failed to generate PIN for email: ${email}`);
        res.status(500).json({ message: 'Failed to generate PIN' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Request Reset Password
  router.post('/requestResetPassword/:email', async (req, res) => {
    try {
      const { email } = req.params;
  
      // Simulate request for password reset
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Request reset password for email: ${email}`);
        res.status(200).json({ message: 'Request for reset password sent successfully' });
      } else {
        console.log(`Failed to request reset password for email: ${email}`);
        res.status(500).json({ message: 'Failed to request reset password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  //export default router;
module.exports = router;