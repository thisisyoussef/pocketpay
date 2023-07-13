const express = require('express');
const onBoardingUser = require('./routes/user/userProfile/onboardingUser');
const updateUser = require('./routes/user/userProfile/updateUser');
const verificationUserProfile = require('./routes/user/userProfile/verificationUser');
const institutionUser = require('./routes/user/institutionEndpointsUser');
const paymentUser = require('./routes/user/payment');
const receiptUser = require('./routes/user/receipt');
const sortCodeToBankUser = require('./routes/user/sortcodeToBank');
const ticketUser = require('./routes/user/ticket');
const verificationUser = require('./routes/user/verification');
const bodyParser = require('body-parser');

// Add body-parser middleware
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3007;

app.use(onBoardingUser);
app.use(updateUser);
app.use(verificationUserProfile);
app.use(institutionUser);
app.use(paymentUser);
app.use(receiptUser);
app.use(sortCodeToBankUser);
app.use(ticketUser);
app.use(verificationUser);

const CSS = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  .spinner {
    display: none;
    margin-right: 10px;
  }

  button:disabled .spinner {
    display: inline-block;
  }

  .container {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }

  @media (min-width: 600px) {
    .container {
      padding: 20px;
    }
  }
`;

const JavaScript = `
  function pay() {
    // Change button state to indicate processing
    const payButton = document.getElementById('payButton');
    payButton.disabled = true;

    // Simulate a delay before redirect
    setTimeout(() => {
      // Redirect back to the app using the deep link
      const deepLink = 'custom.flutterbooksample.com://transaction/${transactionNumber}';
      window.location.href = deepLink;
    }, 2000);
  }
`;

app.get('/paymentProcess', (req, res) => {
  // Generate transaction details (dummy data)
  const transactionNumber = '123456789';
  const amountToPay = 100.0;

  if (!transactionNumber || !amountToPay) {
    return res.status(400).send('Invalid transaction details.');
  }

  const HTML = `
    <html>
      <head>
        <title>Financial Institution</title>
        <style>${CSS}</style>
      </head>
      <body>
        <section class="container">
          <header>
            <h1>Transaction Details</h1>
          </header>
          <p><strong>Transaction Number:</strong> ${transactionNumber}<br>
          This is your unique identifier for this transaction.</p>
          <p><strong>Amount to Pay:</strong> $${amountToPay}<br>
          This is the total amount due for the transaction.</p>
          <button id="payButton" onclick="pay()">
            <span class="spinner">&#x1F310;</span>
            Complete Transaction
          </button>
        </section>
        <script>${JavaScript}</script>
      </body>
    </html>
  `;

  // Render the financial institution page
  res.send(HTML);
});

//run mongoose
require("./db/mongoose");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
