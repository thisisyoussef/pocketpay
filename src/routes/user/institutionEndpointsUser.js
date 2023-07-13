const express = require('express');
const router = express.Router();

// Add Institution
router.put('/user/addInstitution', async (req, res) => {
    try {
      const { institution_id, accountNumber } = req.body;
  
      // Simulate adding institution
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Add institution: institution_id=${institution_id}, accountNumber=${accountNumber}`);
        res.status(200).json({ message: 'Institution added successfully' });
      } else {
        console.log(`Failed to add institution: institution_id=${institution_id}, accountNumber=${accountNumber}`);
        res.status(500).json({ message: 'Failed to add institution' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Change Institution Index
  router.put('/user/changeInstitutionIndex', async (req, res) => {
    try {
      const { institutionId } = req.body;
  
      // Simulate changing institution index
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Change institution index: institutionId=${institutionId}`);
        res.status(200).json({ message: 'Institution index changed successfully' });
      } else {
        console.log(`Failed to change institution index: institutionId=${institutionId}`);
        res.status(500).json({ message: 'Failed to change institution index' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Remove Account
  router.put('/user/removeInstitutionAccount', async (req, res) => {
    try {
      const { accountNumber, institution } = req.query;
  
      // Simulate removing account
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Remove account: accountNumber=${accountNumber}, institution=${institution}`);
        res.status(200).json({ message: 'Account removed successfully' });
      } else {
        console.log(`Failed to remove account: accountNumber=${accountNumber}, institution=${institution}`);
        res.status(500).json({ message: 'Failed to remove account' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  module.exports = router;