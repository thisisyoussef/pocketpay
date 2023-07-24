const express = require('express');
const router = express.Router();

// Reset Password
router.put('/merchant/resetPassword/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { password } = req.body;
  
      // Simulate resetting password
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Reset Password: email=${email}, password=${password}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to reset password: email=${email}`);
        res.status(500).json({ message: 'Failed to reset password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Generate Pin
  router.put('/merchant/generatePin/:email', async (req, res) => {
    try {
      const { email } = req.params;
  
      // Simulate generating pin
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Generate Pin: email=${email}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to generate pin: email=${email}`);
        res.status(500).json({ message: 'Failed to generate pin' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Update Password
  router.put('/merchant/updatePassword/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { oldPassword, password } = req.body;
  
      // Simulate updating password
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Update Password: email=${email}, oldPassword=${oldPassword}, password=${password}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to update password: email=${email}`);
        res.status(500).json({ message: 'Failed to update password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Update Info
  router.put('/merchant/updateInfo', async (req, res) => {
    try {
      const token = req.headers.authorization.replace('Bearer ', '');
      const {
        businessName,
        email,
        phone,
        addressLine,
        postCode,
        VATNumber,
      } = req.body;
  
      // Simulate updating user info
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Update Info: token=${token}, businessName=${businessName}, email=${email}, phone=${phone}, addressLine=${addressLine}, postCode=${postCode}, VATNumber=${VATNumber}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to update info: token=${token}`);
        res.status(500).json({ message: 'Failed to update info' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Add Logo
  router.put('/merchant/addLogo', async (req, res) => {
    try {
      const token = req.headers.authorization.replace('Bearer ', '');
      const image = req.files.upload;
  
      // Simulate adding logo
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Add Logo: token=${token}, image=${image}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to add logo: token=${token}`);
        res.status(500).json({ message: 'Failed to add logo' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Request Reset Password
  router.post('/merchant/requestResetPassword/:email', async (req, res) => {
    try {
      const { email } = req.params;
  
      // Simulate requesting reset password
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Request Reset Password: email=${email}`);
        const profileData = {
          // Simulated profile data
        };
        res.status(200).json(profileData);
      } else {
        console.log(`Failed to request reset password: email=${email}`);
        res.status(500).json({ message: 'Failed to request reset password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;