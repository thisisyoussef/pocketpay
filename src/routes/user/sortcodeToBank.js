const express = require('express');
const router = express.Router();
// Sort Code to Bank
router.get('institution/institutionFilter', async (req, res) => {
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
  
        //const filteredBanks = banks.filter((bank) => bank.name.toLowerCase().includes(sortCode.toLowerCase()));
        //set filtered banks to just banks temporarily
        const filteredBanks = banks;
  
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
  router.get('institution/logoFilter', async (req, res) => {
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
            logo: 'https://firebasestorage.googleapis.com/v0/b/pocketpay-9026f.appspot.com/o/logo1.png?alt=media&token=999c81aa-4344-47cd-a632-adb097d3b3c1',
          },
          {
            _id: 'logo2',
            logo: 'https://firebasestorage.googleapis.com/v0/b/pocketpay-9026f.appspot.com/o/logo2.png?alt=media&token=ce534542-5071-4828-8fd3-15601e415a0d',
          },
        ];
  
        const filteredLogos = logos.filter((logo) => logo.logo.toLowerCase().includes(sortCode.toLowerCase()));
        //set filtered logos to just logos temporarily
        const filteredLogos = logos;
  
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