/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require("firebase-functions/v2");
const express = require("express");
const cors = require("cors");
// const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")('sk_test_51R7E15QF4TlLJlJOGUnPsCU0FyGlrNxFBnMyvAvREkucgR8sl2M4qA05f6C5iPDrXGuR4ggGHv5CN2GKGQbuPCIJ00YguxvUYY')

// API


// App config 
const app = express();



// Middlewares 
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/' , (request, response) => response.status(200).send('hello world'));

app.post('/payment/create', async (request , response) =>{
    const total = request.query.total;

    // here we are creating a payment total and print it
    console.log('Payment Request Recieved BOOM!!! for this amount >>>',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // sununit of the currency
        currency: 'usd',
        });

        // Confirm the payment intent.
        // OK - Created
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint 
// http://127.0.0.1:5001/clone-1b4db/us-central1/api