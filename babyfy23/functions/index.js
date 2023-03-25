const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Lk4urGfsSs8fR4RZxHJhA1YE2cMqaAm18dm1GR4JadCH7iDyENbGDSlc8ySu5090x3W7UJKLK4JlSxRcIGevncf00T1q28uP6');

//API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment request received', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

//(http://127.0.0.1:5001/babyfy23-660c9/us-central1/api)