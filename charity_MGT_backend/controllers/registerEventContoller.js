const EventRegister = require('../models/registorEvent');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');


exports.setEventRegisterIds = (req,res,next)=>{
    if(!req.body.eventId) req.body.eventId = req.params.eventId;
    if(!req.body.userId) req.body.userId = req.user.id;
    next();
}
exports.createRegisterEvent = catchAsync( async (req,res,next)=>{
    const register = await EventRegister.create(req.body);
    res.status(201).json({
        status:'success',
        data:register

    }) 
})
exports.getAllUserRegisteredEvent = catchAsync(async (req,res,next)=>{
    const registered = await EventRegister.find();
    if(!registered){
        return next(new AppError('There is no registered user',404))
    }
    res.status(200).json({
        status:'success',
        count:registered.length,
        data:registered
    }) 
})
exports.getRegisteredEvent = catchAsync(async (req,res,next)=>{
    const registered = await EventRegister.findById(req.params.id);
    if(!registered){
        return next(new AppError('There is no registered user',404))
    }
    res.status(200).json({
        status:'success',
        data:registered
    })
})
exports.updateRegisteredEvent = catchAsync(async (req,res,next)=>{
    const registered = await EventRegister.findByIdAndUpdate(req.params.id,
        req.body,{
            new:true,
            runValidators:true
        })
    if(!registered){
        return next(new AppError('There is no registered user',404))
    }
    res.status(200).json({
        status:'success',
        data:registered
    })
}) 
exports.deleteRegisterdEvent = catchAsync(async (req,res,next)=>{
    const registered = await EventRegister.findByIdAndDelete(req.params.id);
    if(!registered){
        return next(new AppError('There is no registered user',404))
    }
    res.status(200).json({
        status:'success',
        message:"register Event with the Id is deleted successfully"
    })
})