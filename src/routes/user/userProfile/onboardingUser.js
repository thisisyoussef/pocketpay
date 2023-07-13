const express = require('express');
const app = express.Router();

// Simulate 90% success rate
function simulateSuccess() {
  const random = Math.random();
  return random <= 0.9;
}

// Sign up endpoint
app.post('/user/signUp', (req, res) => {
  if (simulateSuccess()) {
    const userToken = 'dummyToken';
    const userInfo = req.body;
    // Save userToken and userInfo to database or any other storage
    // ...

    res.status(200).json({ token: userToken });
  } else {
    res.status(400).json({ error: 'Sign up failed' });
  }
});

// Set login pin endpoint
app.put('/user/setLoginPin/:email', (req, res) => {
  if (simulateSuccess()) {
    res.status(200).json({ message: 'Login pin set successfully' });
  } else {
    res.status(400).json({ error: 'Failed to set login pin' });
  }
});

// Add device endpoint
app.post('/user/addDevice/:email', (req, res) => {
  if (simulateSuccess()) {
    res.status(200).json({ message: 'Device added successfully' });
  } else {
    res.status(400).json({ error: 'Failed to add device' });
  }
});

// Allow device endpoint
app.put('/user/allowDevice/:email', (req, res) => {
  if (simulateSuccess()) {
    res.status(200).json({ message: 'Device allowed successfully' });
  } else {
    res.status(400).json({ error: 'Failed to allow device' });
  }
});

// Login endpoint
app.post('/user/login', (req, res) => {
  if (simulateSuccess()) {
    const userToken = 'dummyToken';
    const email = req.body.email;
    // Retrieve userToken from database or any other storage
    // ...

    res.status(200).json({ token: userToken });
  } else if (req.body.email === 'user@example.com') {
    res.status(401).json({ error: 'Incorrect password' });
  } else if (req.body.email === 'blocked@example.com') {
    res.status(402).json({ error: 'Account blocked' });
  } else {
    res.status(400).json({ error: 'Login failed' });
  }
});

// Login pin endpoint
app.get('/user/loginPin/:email/:pin', (req, res) => {
  if (simulateSuccess()) {
    res.status(200).json({ message: 'Login pin verified' });
  } else {
    res.status(400).json({ error: 'Invalid login pin' });
  }
});

// Remote logout endpoint
app.put('/user/remoteLogout/:email', (req, res) => {
  if (simulateSuccess()) {
    res.status(200).json({ message: 'Remote logout successful' });
  } else {
    res.status(400).json({ error: 'Failed to remote logout' });
  }
});


// My profile endpoint
app.get('/user/myProfile', (req, res) => {
  if (simulateSuccess()) {
    const decodedData = {
      user: {
        _id: 'user_id',
        email: 'user@example.com',
        firstName: 'John',
        lastName: 'Doe',
        dob: '1990-01-01',
        address: {
          postCode: '12345',
        },
        loginPin: '1234',
        phone: '1234567890',
        institution: [
          {
            _id: 'institution1_id',
            institution: {
              logo: 'https://example.com/logo1.png',
              sortCode: '123456',
              _id: 'institution1_id',
              name: 'Barclays Bank',
            },
            accountNumber: '12345678',
          },
          {
            _id: 'institution2_id',
            institution: {
              logo: 'https://example.com/logo2.png',
              sortCode: '234567',
              _id: 'institution2_id',
              name: 'Lloyds Bank',
            },
            accountNumber: '23456789',
          },
          {
            _id: 'institution3_id',
            institution: {
              logo: 'https://example.com/logo3.png',
              sortCode: '345678',
              _id: 'institution3_id',
              name: 'NatWest Bank',
            },
            accountNumber: '34567890',
          },
          {
            _id: 'institution4_id',
            institution: {
              logo: 'https://example.com/logo4.png',
              sortCode: '456789',
              _id: 'institution4_id',
              name: 'HSBC Bank',
            },
            accountNumber: '45678901',
          },
          {
            _id: 'institution5_id',
            institution: {
              logo: 'https://example.com/logo5.png',
              sortCode: '567890',
              _id: 'institution5_id',
              name: 'Santander Bank',
            },
            accountNumber: '56789012',
          },
          {
            _id: 'institution6_id',
            institution: {
              logo: 'https://example.com/logo6.png',
              sortCode: '678901',
              _id: 'institution6_id',
              name: 'Nationwide Building Society',
            },
            accountNumber: '67890123',
          },
        ],
      },
    };
    res.status(200).json(decodedData);
  } else {
    res.status(400).json({ error: 'Failed to fetch user profile' });
  }
});

// Logout endpoint
app.put('/user/logOut', (req, res) => {
  if (simulateSuccess()) {
    res.status(200).json({ message: 'Logged out successfully' });
  } else {
    res.status(400).json({ error: 'Failed to logout' });
  }
});

// Update info endpoint
app.put('/user/updateInfo', (req, res) => {
  if (simulateSuccess()) {
    res.status(200).json({ message: 'Info updated successfully' });
  } else {
    res.status(400).json({ error: 'Failed to update info' });
  }
});

module.exports = app;