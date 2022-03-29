const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Charity = require('../models/charityModel');
const User = require('../models/userModel');
const donationSchema = new mongoose.Schema({
    charity:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Charity',
        required:true
    },
    donor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    DonationOption:{
        type:String,
        enum:['telebirr','hellocash','CBEbirr'],
        default:'telebirr'

    },
    phone:{
        type:Number,
        required:[true,'please provide your phone number']
    },
    password:{
        type:String,
        select: false,
        required:[true,'Please provide password of your account']
    },
    donate:{
        type:Number,
        required:[true,'The amount of money to donate']

    },
    donatedAt:{
        type:Date,
        default:Date.now()
    }
   },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
      }

    )

donationSchema.statics.DonationOfUser = async function(donorId){
    const stats = await this.aggregate([
        {
            $match:{donor:donorId}
        },
        {
        $group:{
            _id:'$donor',
            Amount:{$sum:'$donate'},
            
        }
        }

    ])
    console.log(stats);
   if(stats.length >0){
       await User.findByIdAndUpdate(donorId,{
        donationHistory:stats[0].Amount
       })

   }
} 
donationSchema.statics.SumofDonations = async function(charityId){
    const stats = await this.aggregate([
        {
            $match:{charity:charityId}
        },
        {
        $group:{
            _id:'$charity',
            NumOfDonors :{$sum:1},
            SumofDonations:{$sum:'$donate'}

        }
    }
    ])
 
    if(stats.length >0){
        await Charity.findByIdAndUpdate(charityId,{
            NumOfDonors: stats[0].NumOfDonors,
            SumofDonations:stats[0].SumofDonations

        })
    }else{
        await Charity.findByIdAndUpdate(charityId,{
            NumOfDonors:0,
            SumofDonations:0
        })
    }
}
donationSchema.post('save', function() {
    // this points to current donation
    this.constructor.SumofDonations(this.charity);
  });
donationSchema.post('save',function(){
    this.constructor.DonationOfUser(this.donor);
})

donationSchema.pre(/^find/, function(next) {
        this.populate({
            path:'charity',
            select:' name description'  
        }) 
        // }).populate({
        //     path:'donor',
        //     select:'username photo'
        // })
        
        next();
    })
donationSchema.pre('save',async function(next){
   this.password = await bcrypt.hash(this.password,12) 
   next();
})
const Donation = mongoose.model('Donation',donationSchema);
 module.exports = Donation