const express = require('express');
const router = express.Router();
// Add Ticket
router.post('/addTicket', async (req, res) => {
    try {
      const { subject, text } = req.body;
  
      // Simulate adding a ticket
      const isSuccess = Math.random() < 0.9; // Simulate 90% success rate
  
      if (isSuccess) {
        console.log(`Add Ticket: subject=${subject}`);
  
        // Simulated ticket data
        const ticket = {
          _id: 'ticket1',
          subject,
          text,
        };
  
        res.status(200).json(ticket);
      } else {
        console.log(`Failed to add ticket: subject=${subject}`);
        res.status(500).json({ message: 'Failed to add ticket' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router;
  