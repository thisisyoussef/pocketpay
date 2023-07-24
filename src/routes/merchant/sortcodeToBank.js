const express = require('express');
const router = express.Router();

// Mock institution data
const mockInstitutions = [
  {
    _id: 'INSTITUTION_ID_1',
    name: 'Bank of Mock',
    sortCode: '123456',
  },
  {
    _id: 'INSTITUTION_ID_2',
    name: 'Mock Bank',
    sortCode: '654321',
  },
  // Add more mock institutions as needed
];

// Sort Code to Bank
router.get('/institution/institutionFilter', (req, res) => {
  try {
    const { sortCode } = req.query;
    const institution = mockInstitutions.find(
      (inst) => inst.sortCode === sortCode
    );

    if (!institution) {
      res.status(404).json({ error: 'Bank not found for provided sort code' });
    } else {
      res.status(200).json([institution]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
