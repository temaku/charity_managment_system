const DonateFund = require('../models/donateFundModel');
const catchAysnc = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');

exports.setFundraiseDonateId = (req,res,next)=>{
    if(!req.body.fundraiseId) req.body.fundraiseId = req.params.fundId;
    if(!req.body.userId) req.body.userId = req.user.id;
    next();
}
exports.createDonateFund = catchAysnc(async (req,res,next)=>{
 
    const donateFund = await DonateFund.create(req.body);
    res.status(201).json({
        status:'success',
        data:donateFund

    })
})
exports.createStripePayment = catchAysnc()
exports.getAllDonateFund = catchAysnc( async (req,res,next)=>{
    const donateFund = await DonateFund.find();
    if(!donateFund){
        return next(new AppError('There is no donatefund in collection',404))
    }
    res.status(200).json({
        status:'success',
        count:donateFund.length,
        data:donateFund
    })
})
exports.getDonateFund = catchAysnc( async (req,res,next)=>{
    const donateFund = await DonateFund.findById(req.params.id);
    if(!donateFund){
        return next(new AppError('There is no donateFund with id',404))
    }
    res.status(200).json({
        status:'success',
        data:donateFund
    })
})
exports.updateDonateFund = catchAysnc( async (req,res,next)=>{
    const donateFund = await DonateFund.findByIdAndUpdate(req.params.id,
        req.body,{
            new:true,
            runValidators:true
        })
    if(!donateFund){
        return next(new AppError('There is no donateFund with id',404))
    }
})
exports.deleteDonateFund = catchAysnc( async (req,res,next)=>{
    const donateFund = await DonateFund.findByIdAndDelete(req.params.id);
    if(!donateFund){
        return next(new AppError('There is no donateFund with id',404))
    }
    res.status(200).json({
        status:'success',
        message:"donation fundraise with the Id is deleted successfully"
    })
})