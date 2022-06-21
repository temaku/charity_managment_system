const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Charity = require('../models/charityModel');
const User = require('../models/userModel');
const Budget = require("../models/budgetAllocate");
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
    currency:{
        type:String

    },
    status:{
        type:String
    },
    donate:{
        type:Number,
        required:[true,'The amount of money to donate']

    },
    donatedAt:{
        type:Date,
        default:Date.now()
    },
    
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
            countDonations :{$sum:1},
            Amount:{$sum:'$donate'},
            
        }
        }

    ])
    console.log(stats);
   if(stats.length >0){
       await User.findByIdAndUpdate(donorId,{
        totalDonations:stats[0].Amount,
        noOfDonation:stats[0].countDonations
        

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
donationSchema.statics.BudgetTotalAmout = async function(charityId){
    const stats = await this.aggregate([
        {
            $match:{charity:charityId}
        },
        {
        $group:{
            _id:'$charity',
            currentAmount:{$sum:'$donate'}

        }
    }
    ])
 
    if(stats.length >0){
        await Budget.findByIdAndUpdate(charityId,{
        
            currentAmount:stats[0].currentAmount

        })
    }else{
        await Budget.findByIdAndUpdate(charityId,{
           
            NumOfDonors:0
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
            select:' name description email'   
        }).populate({
            path:'donor',
            select:'username phone email'
        })
        
        next();
    })
donationSchema.pre('save',async function(next){
   this.password = await bcrypt.hash(this.password,12) 
   next();
})
const Donation = mongoose.model('Donation',donationSchema);
 module.exports = Donation