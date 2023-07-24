const express = require('express');
const router = express.Router();

// Add Ticket
router.post('/ticket/addTicket', (req, res) => {
  try {
    const { subject, text } = req.body;

    // Validate input
    if (!subject || !text) {
      return res.status(400).json({ error: 'Subject and Text are required' });
    }

    // Mock response for successful ticket creation
    const ticket = {
      _id: 'TICKET_ID_1',
      subject,
      text,
      createdAt: new Date().toISOString(),
    };

    res.status(200).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;