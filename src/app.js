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
      </head>
      <body>
        <h1>Transaction Details</h1>
        <p>Transaction Number: ${transactionNumber}</p>
        <p>Amount to Pay: $${amountToPay}</p>
        <button onclick="pay()">Pay Now</button>

        <script>
          function pay() {
            // Redirect back to the app using the deep link
            const deepLink = 'customscheme://flutterbooksample.com://transaction/${transactionNumber}';
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