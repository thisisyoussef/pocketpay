const express = require('express');
const bodyParser = require('body-parser');

// Add body-parser middleware
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3007;

app.get('/paymentProcess', (req, res) => {
  // Generate transaction details (dummy data)
  const transactionNumber = '123456789';
  const amountToPay = 100.0;

  // Render the financial institution page
  res.send(`
    <html>
      <head>
        <title>Financial Institution</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
          }

          h1 {
            color: #333;
          }

          p {
            color: #666;
          }

          button {
            padding: 15px 30px;
            font-size: 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #0056b3;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Transaction Details</h1>
          <p><strong>Transaction Number:</strong> ${transactionNumber}<br>
          This is your unique identifier for this transaction.</p>
          <p><strong>Amount to Pay:</strong> $${amountToPay}<br>
          This is the total amount due for the transaction.</p>
          <button onclick="pay()">Complete Transaction</button>
        </div>
        <script>
          function pay() {
            // Redirect back to the app using the deep link
            const deepLink = 'custom.flutterbooksample.com://transaction/${transactionNumber}';
            window.location.href = deepLink;
          }
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
