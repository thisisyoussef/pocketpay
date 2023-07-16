
const express = require('express');
const router = express.Router();
// Get Receipts per Account
router.get('/user/receiptAccInst', async (req, res) => {
    try {
      const { sortCode, accountNumber } = req.query;
  
      // Simulate getting receipts per account
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Get receipts per account: sortCode=${sortCode}, accountNumber=${accountNumber}`);
  
        // Simulated receipts data
        const receipts = [
          {
            _id: 'receipt1',
            payee: {
              businessName: 'H&M',
            },
            payer: 'Payer 1',
            payeee: 'Payee 1',
            amount: 100.0,
            description: 'Receipt 1',
            tip: 10.0,
            transactionNumber: '9646',
            transaction: 'Transaction 1',
            date: '2023-07-09',
            totalAmount: 110.0,
            logo: 'https://firebasestorage.googleapis.com/v0/b/pocketpay-9026f.appspot.com/o/logo1.png?alt=media&token=999c81aa-4344-47cd-a632-adb097d3b3c1',
            createdAt: '2023-07-09T10:00:00Z',
            updatedAt: '2023-07-09T10:00:00Z',
          },
          {
            _id: 'receipt2',
            payee: null,
            payer: 'Payer 2',
            payeee: 'Payee 2',
            amount: 200.0,
            description: 'Receipt 2',
            tip: 20.0,
            transactionNumber: '987654321',
            transaction: 'Transaction 2',
            date: '2023-07-10',
            totalAmount: 220.0,
            logo: 'https://firebasestorage.googleapis.com/v0/b/pocketpay-9026f.appspot.com/o/logo2.png?alt=media&token=ce534542-5071-4828-8fd3-15601e415a0d',
            createdAt: '2023-07-10T10:00:00Z',
            updatedAt: '2023-07-10T10:00:00Z',
          },
        ];
  
        // Simulated refunds data
        const refunds = [
          {
            _id: 'refund1',
            payee: 'Payee 3',
            amount: 50.0,
            description: 'Refund 1',
            tip: 5.0,
            transactionNumber: '567890123',
            transaction: 'Transaction 3',
            date: '2023-07-11',
            totalAmount: 55.0,
            logo: 'https://firebasestorage.googleapis.com/v0/b/pocketpay-9026f.appspot.com/o/logo3.png?alt=media&token=9515b72a-db69-4d4a-a9b9-fc99ac088a7b',
            createdAt: '2023-07-11T10:00:00Z',
            updatedAt: '2023-07-11T10:00:00Z',
          },
          {
            _id: 'refund2',
            payee: 'Payee 4',
            amount: 75.0,
            description: 'Refund 2',
            tip: 7.5,
            transactionNumber: '234567890',
            transaction: 'Transaction 4',
            date: '2023-07-12',
            totalAmount: 82.5,
            logo: 'https://firebasestorage.googleapis.com/v0/b/pocketpay-9026f.appspot.com/o/logo4.png?alt=media&token=51e301af-86dd-413b-a032-a1a65bd8a675',
            createdAt: '2023-07-12T10:00:00Z',
            updatedAt: '2023-07-12T10:00:00Z',
          },
        ];
  
        res.status(200).json({ Receipts: receipts, Refunds: refunds });
      } else {
        console.log(`Failed to get receipts per account: sortCode=${sortCode}, accountNumber=${accountNumber}`);
        res.status(500).json({ message: 'Failed to get receipts per account' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router;
  