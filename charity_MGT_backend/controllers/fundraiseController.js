const Fundraise = require('../models/FundraiseModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');


exports.createFundraise = catchAsync( async (req,res,next)=>{
    const fundraise = await Fundraise.create(req.body);
   res.status(201).json({
       status:"success",
       data:fundraise
   })
})
exports.getAllFundraise = catchAsync( async (req,res,next)=>{
    const fundraise = await Fundraise.find();
    if(!fundraise){
        return next(new AppError("There is no Fundraise yet",404))
    }
    res.status(200).json({
        status:"success",
        count:fundraise.length,
        data:fundraise
    })
})
exports.getFundraise = catchAsync( async (req,res,next)=>{
    const fundraise = await Fundraise.findById(req.params.id);
    if(!fundraise){
        return next(new AppError('no fundraise with that id',404))
    }
    res.status(200).json({
        status:'success',
        data:fundraise
    })
})
exports.updateFundraise = catchAsync( async (req,res,next)=>{
    const fundraise = await Fundraise.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!fundraise){
        return next(new AppError('No  fundraise with the id',404))
    }
    res.status(200).json({
        status:'success',
        data:fundraise
    })
})
exports.deleteFundraise = catchAsync(async (req,res,next)=>{
    const fundraise = await Fundraise.findByIdAndDelete(req.params.id);
    if(!fundraise){
        return next(new AppError('No fundraise with the id',404))
    }
    res.status(204).json({
        status:'success',
        data:null
    })

})