const Event = require('../models/eventsModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/catchAysnc')
const sharp = require('sharp');
const multer = require('multer');


const multerStorage = multer.memoryStorage();
const multerFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    }else{
        cb(new AppError('Not an image! Please upload only images.',400),false)
    }
}
const upload = multer({
  storage:multerStorage,
  fileFilter:multerFilter
})
exports.uploadEventPhoto = upload.single('photo');
exports.resizeEventPhoto = catchAsync(async (req,res,next)=>{
  if(!req.file) return next();
  req.file.filename = `events-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
  .resize(500,500)
  .toFormat('jpeg')
  .jpeg({ quality:90 })
  .toFile(`./public/uploads/events/${req.file.filename}`);

  next();
})
const filterObj = (obj,...allowedFields)=>{
    const newObj = {};
    Object.keys(obj).forEach(el=>{
        if(allowedFields.includes(el)) newObj[el] = obj[el];
    })
    return newObj;
  }

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
    const filteredBody = filterObj(req.body,'title')
    console.log("update");
   if(req.file){
     filteredBody.photo = req.file.filename;
   }
   console.log(filteredBody.image);
    const event = await Event.findByIdAndUpdate(req.params.id,filteredBody,{
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