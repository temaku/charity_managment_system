const Event = require('../models/eventsModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/catchAysnc')



exports.createEvent = catchAsync(async (req,res,next)=>{
    const event = await Event.create(req.body);
    res.status(201).json({
        status:'success',
        data:event

    })
})
exports.getEvents = catchAsync(async (req,res,next)=>{
    const events = await Event.find();
    if(!events){
        return next(new AppError('There is no events with the id',404))
    }
    res.status(200).json({
        status:'success',
        count:events.length,
        data:events
    })
})
exports.getEvent = catchAsync(async (req,res,next)=>{
    const event = await Event.findById(req.params.id);
    if(!event){
        return next(new AppError('There is no events with the id',404))
    }
    res.status(200).json({
        status:'success',
        data:event
    })
})
exports.updateEvent = catchAsync(async (req,res,next)=>{
    const event = await Event.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!event){
        return next(new AppError('There is no events with id',404))
    }
    res.status(200).json({
        status:'success',
        data:event
    })
})
exports.deleteEvent = catchAsync(async (req,res,next)=>{
    const event = await Event.findByIdAndDelete(req.params.id);
    if(!event){
        return next(new AppError('There is no event with id',404))
    }
    res.status(204).json({
        status:'success',
        data:null
    })
})