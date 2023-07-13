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

  if (!transactionNumber || !amountToPay) {
    return res.status(400).send('Invalid transaction details.');
  }

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
            color: #333;
          }

          h1 {
            color: #444;
          }

          p {
            color: #444;
            line-height: 1.5;
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
            box-sizing: border-box;
          }

          @media (max-width: 600px) {
            .container {
              padding: 10px;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Transaction Details</h1>
        </header>
        <section class="container">
          <p><strong>Transaction Number:</strong> ${transactionNumber}<br>
          This is your unique identifier for this transaction.</p>
          <p><strong>Amount to Pay:</strong> $${amountToPay}<br>
          This is the total amount due for the transaction.</p>
          <button id="payButton" onclick="pay()">Complete Transaction</button>
        </section>
        <script>
          function pay() {
            // Change button text to indicate processing
            const payButton = document.getElementById('payButton');
            payButton.textContent = 'Processing your transaction...';
            payButton.disabled = true;

            // Simulate a delay before redirect
            setTimeout(() => {
              // Redirect back to the app using the deep link
              const deepLink = 'custom.flutterbooksample.com://transaction/${transactionNumber}';
              window.location.href = deepLink;
            }, 2000);
          }
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
