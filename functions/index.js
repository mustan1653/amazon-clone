const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HgPxFJS37lJ6zOVCslcyQUUPr9g76fACvCeZyv2hBblpGOn7isw2Gqzh7RspEiUq0AwUHuILfhGnIYutQazIrdK00Dh2AOuvU');

//API

//Appconfig
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received for this amount!!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits in currency
        currency: 'INR',
    });

        //Ok created
        response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen command
exports.api = functions.https.onRequest(app);
//Example endpoints
//http://localhost:5001/clone-ff4d5/us-central1/api