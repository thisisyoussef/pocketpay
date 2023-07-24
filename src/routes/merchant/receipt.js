const express = require('express');
const router = express.Router();

const userToken = 'YOUR_MOCK_USER_TOKEN';

// Mock receipt data
const mockReceipts = [
  {
    ID: 1,
    PAYER: 'John Doe',
    PAYEE: 'Jane Smith',
    AMOUNT: 50.0,
    DESCRIPTION: 'Payment for goods',
    TIP: 5.0,
    TRANSACTIONNUMBER: '12345',
    TRANSACTION: 'Transaction details',
    DATE: '2023-07-09',
    TOTALAMOUNT: 55.0,
    CREATEDAT: '2023-07-09T10:00:00Z',
    UPDATEDAT: '2023-07-09T11:00:00Z',
    REFUND: false,
    V: 0,
  },
  // Add more mock receipt data here
];

// Get All Receipts
router.get('/merchant/allReceipts', (req, res) => {
  try {
    res.status(200).json(mockReceipts);
  } catch (error) {
    console.error(error);
    res.status(500).json([]);
  }
});

module.exports = router;
