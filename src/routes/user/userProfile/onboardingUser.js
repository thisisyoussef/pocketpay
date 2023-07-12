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
        _id: 'dummyUserId',
        email: 'user@example.com',
        firstName: 'John',
        lastName: 'Doe',
        dob: '1990-01-01',
        address: {
          postCode: '12345'
        },
        loginPin: '1234',
        phone: '1234567890',
        institution: []
      }
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