const Donation = require('../models/donationModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');


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
    res.status(204).json({
        status:'success',
        data:null
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

