const express = require('express');
const router = express.Router();

// Sign Up
router.post('/merchant/signUp', async (req, res) => {
    try {
      const {
        businessName,
        email,
        password,
        companyNumber,
        phone,
        streetName,
        buildingNumber,
        county,
        country,
        department,
        supDepartment,
        addressType,
        uniqueId,
      } = req.body;
  
      // Simulate sign up
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Sign up: businessName=${businessName}, email=${email}, password=${password}, companyNumber=${companyNumber}, phone=${phone}, streetName=${streetName}, buildingNumber=${buildingNumber}, county=${county}, country=${country}, department=${department}, supDepartment=${supDepartment}, addressType=${addressType}, uniqueId=${uniqueId}`);
        const token = 'some_generated_token'; // Simulated user token
        res.status(200).json({ token });
      } else {
        console.log(`Failed to sign up: email=${email}`);
        res.status(500).json({ message: 'Failed to sign up' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Set Login Pin
  router.put('/merchant/setLoginPin/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { loginPin } = req.body;
  
      // Simulate setting login pin
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Set login pin: email=${email}, loginPin=${loginPin}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to set login pin: email=${email}`);
        res.status(500).json({ message: 'Failed to set login pin' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Add Device
  router.post('/merchant/addDevice/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { loginPin, os, version } = req.body;
  
      // Simulate adding a device
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Add device: email=${email}, loginPin=${loginPin}, os=${os}, version=${version}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to add device: email=${email}`);
        res.status(500).json({ message: 'Failed to add device' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Allow Device
  router.put('/merchant/allowDevice/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { loginPin, uniqueId } = req.body;
  
      // Simulate allowing a device
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Allow device: email=${email}, loginPin=${loginPin}, uniqueId=${uniqueId}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to allow device: email=${email}`);
        res.status(500).json({ message: 'Failed to allow device' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Login
  router.post('/merchant/login', async (req, res) => {
    try {
      const { password, email, uniqueId } = req.body;
  
      // Simulate login
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Login: email=${email}, password=${password}, uniqueId=${uniqueId}`);
        const token = 'some_generated_token'; // Simulated user token
        res.status(200).json({ token });
      } else if (Math.random() < 0.3) {
        console.log(`Failed to login: email=${email}`);
        res.status(400).json({ message: 'Invalid credentials' });
      } else {
        console.log(`Failed to login: email=${email}`);
        res.status(500).json({ message: 'Failed to login' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Login Pin
  router.get('/merchant/loginPin/:email/:pin', async (req, res) => {
    try {
      const { email, pin } = req.params;
  
      // Simulate login with pin
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Login with pin: email=${email}, pin=${pin}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to login with pin: email=${email}`);
        res.status(500).json({ message: 'Failed to login with pin' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Remote Logout
  router.put('/merchant/remoteLogout/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const { loginPin } = req.body;
  
      // Simulate remote logout
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Remote logout: email=${email}, loginPin=${loginPin}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to remote logout: email=${email}`);
        res.status(500).json({ message: 'Failed to remote logout' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // My Profile
  router.get('/merchant/myProfile', async (req, res) => {
    try {
      const token = req.headers.authorization.replace('Bearer ', '');
  
      // Simulate getting user profile
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`My Profile: token=${token}`);
        const profileData = {
          Merchant: {
            logo: 'some_logo_url',
            email: 'example@example.com',
            phone: '1234567890',
            institution: [
              {
                institution: {
                  logo: 'some_logo_url',
                  sortCode: '123456',
                  _id: 'some_id',
                  name: 'some_name',
                },
                accountNumber: '12345678',
              },
            ],
            companyNumber: '12345678',
            businessName: 'Some Business Name',
            dob: '1990-01-01',
            address: {
              postCode: '1111111',
              addressLine: ['address_line_1', 'address_line_2'],
            },
            loginPin: '1234',
            _id: 'some_user_id',
            VATNumber: 'VAT12345',
          },
        };
        res.status(200).json(profileData);
      } else {
        console.log(`Failed to get profile: token=${token}`);
        res.status(500).json({ message: 'Failed to get profile' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Logout
  router.put('/merchant/logOut', async (req, res) => {
    try {
      const token = req.headers.authorization.replace('Bearer ', '');
  
      // Simulate logout
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Logout: token=${token}`);
        res.status(200).json({});
      } else {
        console.log(`Failed to logout: token=${token}`);
        res.status(500).json({ message: 'Failed to logout' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
    module.exports = router;