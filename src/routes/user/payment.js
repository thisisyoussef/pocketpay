const express = require('express');
const router = express.Router();
// Add Transaction
router.post('/payment/addTransaction', async (req, res) => {
    try {
      const { payee, amount, description, tip } = req.body;
  
      // Simulate adding a transaction
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Add transaction: payee=${payee}, amount=${amount}, description=${description}, tip=${tip}`);
        const authorisationUrl = 'https://example.com/authorise'; // Simulated redirect URL
        const transactionNumber = '123456789'; // Simulated transaction number
        res.status(200).json({ authorisationUrl, transaction: { transactionNumber } });
      } else {
        console.log(`Failed to add transaction: payee=${payee}, amount=${amount}, description=${description}, tip=${tip}`);
        res.status(500).json({ message: 'Failed to add transaction' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Transfer Consent
  router.get('/transferConsent', async (req, res) => {
    try {
      const { consent, transactionNumber } = req.query;
      const auid = req.headers['application-user-id'];
  
      // Simulate transfer consent
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Transfer consent: auid=${auid}, consent=${consent}, transactionNumber=${transactionNumber}`);
        const transactionStatus = 'COMPLETED'; // Simulated transaction status
        res.status(200).json({ transaction: { status: transactionStatus } });
      } else {
        console.log(`Failed to transfer consent: auid=${auid}, consent=${consent}, transactionNumber=${transactionNumber}`);
        res.status(500).json({ message: 'Failed to transfer consent' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
    module.exports = router;