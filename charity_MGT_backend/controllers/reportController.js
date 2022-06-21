const Report = require('../models/reportModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');


exports.createReport = catchAsync(async (req,res,next)=>{
    const report = await Report.create(req.body);
    res.status(201).json({
        status:'success',
        data:report
    })
})
exports.getAllReport = catchAsync(async (req,res,next)=>{
    const reports = await Report.find();
    if(!reports){
        return next(new AppError('There is no report in the collection',404))
    }
    res.status(200).json({
        status:'success',
        count:reports.length,
        data:reports
    })
})
exports.getReport = catchAsync(async (req,res,next)=>{
    const report = await Report.findById(req.params.id);
    if(!report){
        return next(new AppError('There is no report in the collection',404))
    }
    res.status(200).json({
        status:'success',
        data:report
    })
})
exports.updateReport = catchAsync(async (req,res,next)=>{
    const report = await Report.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!report){
        return next(new AppError('There is no report in the collection',404))
    }
    res.status(200).json({
        status:'success',
        data:report
    })
})
exports.deleteReport = catchAsync(async (req,res,next)=>{
    const report = await Report.findByIdAndDelete(req.params.id);
    if(!report){
        return next(new AppError('There is no report in the collection',404))
    }
    res.status(200).json({
        status:'success',
     message:"report with the Id is deleted successfully"
    })
})