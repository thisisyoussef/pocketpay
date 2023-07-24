const express = require('express');
const router = express.Router();

const userToken = 'YOUR_MOCK_USER_TOKEN';

// Mock refund data
const mockRefundResponse = {
  authorisationUrl: 'https://example.com', // Replace with your desired URL
  transaction: {
    transactionNumber: 'NEW_REFUND_TRANSACTION_NUMBER', // Replace with the new refund transaction number
  },
};

// Add Refund
router.post('/refund/addTransaction', (req, res) => {
  try {
    const { transactionNumber } = req.body;
    console.log('Token is ' + userToken);
    console.log('Transaction Number ' + transactionNumber);
    res.status(200).json(mockRefundResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Transfer Consent for Refund
router.get('/refund/transferConsent', (req, res) => {
  try {
    const { 'application-user-id': auid, consent, oldTransactionNumber, transactionNumber } = req.query;
    console.log('bookmark');
    console.log('Old Transaction Number ' + oldTransactionNumber);
    console.log('New Refund Transaction Number ' + transactionNumber);
    console.log('Consent ' + consent);
    console.log('Application User ID ' + auid);
    console.log('Token is ' + userToken);
    // Return a success response, you can modify this response as needed
    res.status(200).json({ message: 'Consent response true' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;