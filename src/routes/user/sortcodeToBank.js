const express = require('express');
const router = express.Router();
// Sort Code to Bank
router.get('/institutionFilter', async (req, res) => {
    try {
      const { sortCode } = req.query;
  
      // Simulate sorting code to bank conversion
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Sort Code to Bank: sortCode=${sortCode}`);
  
        // Simulated bank data
        const banks = [
          {
            _id: 'bank1',
            name: 'Bank 1',
          },
          {
            _id: 'bank2',
            name: 'Bank 2',
          },
        ];
  
        const filteredBanks = banks.filter((bank) => bank.name.toLowerCase().includes(sortCode.toLowerCase()));
  
        if (filteredBanks.length > 0) {
          res.status(200).json(filteredBanks);
        } else {
          res.status(404).json({ message: 'Bank not found' });
        }
      } else {
        console.log(`Failed to convert Sort Code to Bank: sortCode=${sortCode}`);
        res.status(500).json({ message: 'Failed to convert Sort Code to Bank' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Logo Filter
  router.get('/logoFilter', async (req, res) => {
    try {
      const { sortCode } = req.query;
  
      // Simulate logo filter
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Logo Filter: sortCode=${sortCode}`);
  
        // Simulated logo data
        const logos = [
          {
            _id: 'logo1',
            logo: 'https://example.com/logo1.png',
          },
          {
            _id: 'logo2',
            logo: 'https://example.com/logo2.png',
          },
        ];
  
        const filteredLogos = logos.filter((logo) => logo.logo.toLowerCase().includes(sortCode.toLowerCase()));
  
        if (filteredLogos.length > 0) {
          res.status(200).json(filteredLogos);
        } else {
          res.status(404).json({ message: 'Logo not found' });
        }
      } else {
        console.log(`Failed to apply Logo Filter: sortCode=${sortCode}`);
        res.status(500).json({ message: 'Failed to apply Logo Filter' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
    module.exports = router;