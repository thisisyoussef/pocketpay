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
      const receipts = generateRandomReceipts();
      const refunds = generateRandomRefunds();

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

// Generate random receipts with randomized values, lengths, and details
function generateRandomReceipts() {
  const receipts = [];

  // Generate a random number of receipts (between 1 and 5)
  const numReceipts = getRandomInt(1, 5);

  for (let i = 0; i < numReceipts; i++) {
    const receipt = {
      _id: `receipt${i + 1}`,
      payee: generateRandomPayee(),
      payer: `Payer ${i + 1}`,
      payeee: `Payee ${i + 1}`,
      amount: getRandomFloat(50, 200),
      description: generateRandomDescription(),
      tip: getRandomFloat(5, 20),
      transactionNumber: getRandomInt(100000, 999999).toString(),
      transaction: `Transaction ${i + 1}`,
      date: generateRandomDate(),
      totalAmount: 0, // Placeholder, will be calculated later
      logo: `https://example.com/logo${i + 1}.png`, // Update with the correct URL for each logo
      createdAt: generateRandomDate(),
      updatedAt: generateRandomDate(),
    };

    receipt.totalAmount = receipt.amount + receipt.tip;

    receipts.push(receipt);
  }

  // Sort receipts by date in descending order
  receipts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return receipts;
}

// Generate random refunds with randomized values, lengths, and details
function generateRandomRefunds() {
  const refunds = [];

  // Generate a random number of refunds (between 1 and 5)
  const numRefunds = getRandomInt(1, 5);

  for (let i = 0; i < numRefunds; i++) {
    const refund = {
      _id: `refund${i + 1}`,
      payee: `Payee ${i + 1}`,
      amount: getRandomFloat(25, 100),
      description: `Refund ${i + 1}`,
      tip: getRandomFloat(2.5, 10),
      transactionNumber: getRandomInt(100000, 999999).toString(),
      transaction: `Transaction ${i + 1}`,
      date: generateRandomDate(),
      totalAmount: 0, // Placeholder, will be calculated later
      logo: `https://example.com/logo${i + 3}.png`, // Update with the correct URL for each logo
      createdAt: generateRandomDate(),
      updatedAt: generateRandomDate(),
    };

    refund.totalAmount = refund.amount + refund.tip;

    refunds.push(refund);
  }

  // Sort refunds by date in descending order
  refunds.sort((a, b) => new Date(b.date) - new Date(a.date));

  return refunds;
}

// Generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random float between min and max
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Generate a random description from a list of coherent descriptions
function generateRandomDescription() {
  const descriptions = [
    'Grocery Shopping',
    'Restaurant Bill',
    'Clothing Purchase',
    'Online Payment',
    'Travel Expenses',
  ];

  const randomIndex = getRandomInt(0, descriptions.length - 1);
  return descriptions[randomIndex];
}

// Generate a random date string in the format 'YYYY-MM-DD'
function generateRandomDate() {
  const year = getRandomInt(2020, 2023);
  const month = getRandomInt(1, 12).toString().padStart(2, '0');
  const day = getRandomInt(1, 28).toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Generate a random payee object with a random business name
function generateRandomPayee() {
  const businessNames = [
    'ABC Store',
    'XYZ Corporation',
    'PQR Enterprises',
    'LMN Industries',
    'JKL Ltd',
  ];

  const randomIndex = getRandomInt(0, businessNames.length - 1);
  return {
    businessName: businessNames[randomIndex],
  };
}

module.exports = router;
