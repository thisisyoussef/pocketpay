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
            background-color: #f4f4f4;
          }

          h1 {
            color: #333;
          }

          button {
            background-color: #4CAF50;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
          }

          @media screen and (max-width: 600px) {
            body {
              font-size: 18px;
            }

            button {
              padding: 12px 24px;
              font-size: 14px;
            }
          }
        </style>
      </head>
      <body>
        <article>
          <header>
            <h1>Transaction Details</h1>
          </header>
          <section>
            <p>Transaction Number: ${transactionNumber}</p>
            <p>Amount to Pay: $${amountToPay}</p>
          </section>
          <footer>
            <button onclick="confirmPayment()" role="button">Pay Now</button>
          </footer>
        </article>

        <script>
          function confirmPayment() {
            if (window.confirm('Are you sure you want to proceed with the payment?')) {
              pay();
            }
          }

          function pay() {
            // Redirect back to the app using the deep link
            const deepLink = 'pocketpay://';
            window.location.href = deepLink;
          }
        </script>
      </body>
    </html>
  `);
});


//run mongoose
require("./db/mongoose");


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});