const express = require('express');
const router = express.Router();

const userToken = 'YOUR_MOCK_USER_TOKEN';

//Mock data reading:

// if (decodedData["Receipts"] != null) {
//   for (var payment in decodedData["Receipts"]) {
//     receipts.add(Receipt(
//         // BUSINESSNAME: payment['payee']['businessName'],
//         ID: payment["_id"],
//         PAYER: payment["payer"],
//         PAYEE: payment["payee"],
//         AMOUNT: payment['amount'],
//         DESCRIPTION: payment["description"],
//         TIP: double.parse(payment["tip"].toString()),
//         TRANSACTIONNUMBER: payment["transactionNumber"],
//         TRANSACTION: payment["transaction"],
//         DATE: payment["date"],
//         TOTALAMOUNT: payment["totalAmount"],
//         CREATEDAT: payment["createdAt"],
//         UPDATEDAT: payment["updatedAt"],
//         REFUND: false,
//         V: 0));
//     print("payer is " + payment["payer"].toString());
//   }
// }
// Mock receipt data
// add an object with a receipts field and a list of receipts inside 
const mockReceipts = 
{
  "Receipts": [
    {
      "payer": "Mock Payer",
      "_id": "RECEIPT_ID_1",
      "payee": "Mock Payee",
      "amount": 100.0,
      "description": "Mock Description",
      "tip": 0.0,
      "transactionNumber": "123456789",
      "transaction": "Mock Transaction",
      "date": "2021-01-01T00:00:00.000Z",
      "totalAmount": 100.0,
      "createdAt": "2021-01-01T00:00:00.000Z",
      "updatedAt": "2021-01-01T00:00:00.000Z",
      "refund": false,
    },
  ],
};
    

  // Add more mock receipt data here

// Get All Receipts
router.get('/merchant/allReceipts', (req, res) => {
  try {
    res.status(200).json(mockReceipts);
  } catch (error) {
    console.error(error);
    res.status(500).json([]);
  }
});

module.exports = router;
