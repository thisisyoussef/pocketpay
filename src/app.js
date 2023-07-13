const express = require('express');
const bodyParser = require('body-parser');

// React and ReactDOM are not available in Node.js
// So, this is just a hypothetical example
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Add body-parser middleware
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3007;

function TransactionPage() {
  const transactionNumber = '123456789';
  const amountToPay = 100.0;

  // onClick event is not applicable in server side rendering
  // So, this is just a hypothetical example
  const pay = () => {
    const deepLink = `custom.flutterbooksample.com://transaction/${transactionNumber}`;
    window.location.href = deepLink;
  };

  return React.createElement('main', {className: 'transaction-page'}, [
    React.createElement('header', {}, [
      React.createElement('h1', {}, 'Transaction Details')
    ]),
    React.createElement('section', {}, [
      React.createElement('p', {}, `Transaction Number: ${transactionNumber}`),
      React.createElement('p', {}, `Amount to Pay: $${amountToPay}`),
      React.createElement('button', {onClick: pay}, 'Complete Transaction')
    ])
  ]);
}

app.get('/paymentProcess', (req, res) => {
  // Generate the HTML string from the React component
  const htmlString = ReactDOMServer.renderToString(React.createElement(TransactionPage));

  // Send the HTML string back to the client
  res.send(`
    <html>
      <head>
        <title>Financial Institution</title>
        <style>
          /* Your CSS styles would go here */
        </style>
      </head>
      <body>
        ${htmlString}
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
