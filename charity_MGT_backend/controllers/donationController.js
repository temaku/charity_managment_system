const Donation = require('../models/donationModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');
require("dotenv").config();
const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


exports.setCharityDonorIds = (req,res,next)=>{
    if(!req.body.charity)req.body.charity = req.params.charityId;
    if(!req.body.donor)req.body.donor = req.user.id;
    next();
}

exports.createDonation = catchAsync( async (req,res,next)=>{
    const donate = await Donation.create(req.body);
    donate.password = undefined;
      res.status(201).json({
          status:'success',
          data:donate
      })
})
exports.createStripePayment = catchAsync(async (req,res,next)=>{
   
    

   
    // console.log(req.body);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: req.body.currency,
        metadata: {
          charityId:req.body.charityOrFundId,
          userId:req.body.userId,
         // donationId:donate._id
          },
        automatic_payment_methods: {
          enabled: true,
        },
      });

     //console.log(paymentIntent);
      res.json({
    client_secret: paymentIntent.client_secret,
    // ephemeralKey: ephemeralKey.secret,
    // customer: customer.id,
    // publishableKey: 'pk_test_51KgxpnCY2HhjTaMFA8cYQbMpT59mUntMToxMYBHXZMHZMgWCyxjSRsRuji5YwSL8ePqC4BPgAplDuFsvcGIkEq8Z002m7aZECy'
        
      });
      const data = {
        donate:req.body.amount,
        charity:metadata.charityId,
        donor:metadata.userId,
        currency: currency,
        status: "CREATED"
      }
       const donate = await Donation.save(data);
        res.status(201).json({
            status:'success',
            data:donate
        })
    })
const endpointSecret = "whsec_7b4b88c9bcb8bd4681c791ce45314903d8b317db292ee153b6dfb53f1c6bb17b";
exports.webhooksendPoint = async (req,res)=>{
//     const sig = req.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//     console.log("web hook verified");
//   } catch (err) {
//     console.log(`web hook error: ${err.message}`)
//     response.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }
//    res.send().end();
//     //const event = req.body;
//     const paymentIntent = event.data.object
//     const metaData = paymentIntent.metadata;
//     const donationId = metaData.donationId;
//     switch(event.type) {
//         case 'payment_intent.succeeded':
//           try {
//             this.updateDonation(donationId, "SUCCEEDED", event);
//             sendDonationSuccessFullMail(donationId);
//             // const donation = awaitstrapi.query('donations').findOne({id:donationId});
//             // const campaign = strapi.query('campaigns').findOne({id:donation.campaign_id})
//           } catch (error) {
//             console.log(error);
//           }
//           break;
//         case 'payment_intent.payment_failed':
//           try{
//             this.updateDonation(donationId, "FAILED", event);
//           }catch(error){
//             console.log(error);
//           }
//           break;
//         default:
//           // Unexpected event type
//           console.log(`Unhandled event type ${event.type}`);
//       }
//       return res.send({
//         "message":"webhook handled"

//    console.log(gPaymentIntent for ${JSON.stringify(event)} was successful!`);
//     console.log(PaymentIntent for ${paymentIntent.amount} was successful!);


}
   



exports.getAllDonation = catchAsync(async (req,res,next)=>{
    console.log("inside the get");
    const donations = await Donation.find();
    if(!donations){
        return next(new AppError('There is no donations',404))
    }
    res.status(200).json({
        status:'success',
        count:donations.length,
        data:donations
    })
})
exports.getUserDonation = catchAsync(async (req,res,next)=>{
   
    const donate = await Donation.find({donor:req.user.id});
    if(!donate){
        return next(new AppError('No donation existed with the id',404))
    }
  
    res.status(200).json({
        status:'success',
        count : donate.length,
        data:donate

        

    })
})



exports.getDonation = catchAsync(async (req,res,next)=>{
    const donate = await Donation.findById(req.params.id);
    if(!donate){
        return next( new AppError('There is no donation with id',404))
    }
    res.status(200).json({
        status:'success',
        data:donate
    })
})
exports.updateDonation = catchAsync(async (req,res,next)=>{
    const donate = await Donation.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!donate){
        return next(new AppError('There is no donation with id',404))
    }
    res.status(200).json({
        status:'success',
        data:donate
    })
})
exports.deleteDonation = catchAsync(async (req,res,next)=>{
    const donate = await Donation.findByIdAndDelete(req.params.id);
    if(!donate){
        return next(new AppError('There is no donation with Id',404))
    }
    res.status(200).json({
        status:'success',
        message:"donation with the Id is deleted successfully"
    })
})

exports.getDonationStats = catchAsync( async(req,res,next)=>{

    const stats = await Donation.aggregate([
        
            {
                $match: { donate:{$gte:0} }
              },
            
              {
                  $group:{
                  _id:{$toUpper:'$DonationOption'},
                  sumDonation:{$sum:'$donate'}
              }
            }
    ])
   
    res.status(200).json({
        status:"success",
        data:stats
    })
})

