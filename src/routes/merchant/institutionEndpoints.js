const express = require('express');
const router = express.Router();

// ... (other route handlers)

// Request Reset Password
router.post('/merchant/requestResetPassword/:email', async (req, res) => {
  try {
    // ... (existing code)

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

//addInstitution
router.put('/merchant/addInstitution', async (req, res) => {
  try {
    const { token, institutionName, institutionCode, institutionType, institutionAddress, institutionPhone, institutionEmail, institutionWebsite, institutionLogo } = req.body;

    // Simulate adding institution
    const isSuccess = Math.random() < 0.9; // Simulate 90% success rate

    if (isSuccess) {
      console.log(`Add Institution: token=${token}, institutionName=${institutionName}, institutionCode=${institutionCode}, institutionType=${institutionType}, institutionAddress=${institutionAddress}, institutionPhone=${institutionPhone}, institutionEmail=${institutionEmail}, institutionWebsite=${institutionWebsite}, institutionLogo=${institutionLogo}`);
      res.status(200).json({});
    } else {
      console.log(`Failed to add institution: token=${token}`);
      res.status(500).json({ message: 'Failed to add institution' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;