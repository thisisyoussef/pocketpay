const express = require('express');
const router = express.Router();

const userToken = 'YOUR_MOCK_USER_TOKEN';

// Mock revenue data
const mockRevenueResponse = {
  CV: 2500, // Replace with your desired current volume value
  CF: 500, // Replace with your desired amount due value
  TP: 0.03, // Replace with your desired take percentage value
};

// Get Revenue
router.get('/merchant/getRevenue', (req, res) => {
  try {
    console.log(userToken);
    res.status(200).json(mockRevenueResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
