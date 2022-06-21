const mongoose = require('mongoose');
//const stripetest = require('stripe')(process.env.STRIPE_SECRET_KEY);
 require('dotenv/config');
// mongodb connection String


//stripe payment 
// app.get('/stripePayment',async (req,res)=>{
//   const paymentIntent = await stripetest.paymentIntents.create({
//     amount: parseInt(req.query.amount),
//     currency: req.query.currency,
// }, function (error, paymentIntent) {
//     if (error != null) {
//         console.log(error);
//         res.json({ "error": error });
//     } else {
//         res.json({
//             paymentIntent: paymentIntent.client_secret,
//             paymentIntentData: paymentIntent,
//             amount: req.body.amount,
//             currency: req.body.currency
//         });
//     }
// });
// })
 const app = require('./app');
 mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })
  .then(() => console.log('DB connection successful!'));
  
const port = process.env.PORT || 8181;
 app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
