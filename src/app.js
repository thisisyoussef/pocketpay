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


//run mongoose
require("./db/mongoose");


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});