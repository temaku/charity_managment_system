const User = require('../models/userModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');
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
exports.uploadUserPhoto = upload.single('photo');
exports.resizeUserPhoto = catchAsync(async (req,res,next)=>{
    if(!req.file) return next();
    req.file.filename = `user-${req.user.id}.jpeg`;

    await sharp(req.file.buffer)
    .resize(500,500)
    .toFormat('jpeg')
    .jpeg({ quality:90 })
    .toFile(`./public/uploads/users/${req.file.filename}`);

    next();
})
const filterObj = (obj,...allowedFields)=>{
    const newObj = {};
    Object.keys(obj).forEach(el=>{
        if(allowedFields.includes(el)) newObj[el] = obj[el];
    })
    return newObj;
}
exports.getMe = (req,res,next)=>{
   
    req.params.id = req.user.id;
    next();
}
   
exports.updateMe = catchAsync(async (req,res,next)=>{
  
    if(req.body.password){
        return next(
            new AppError('This route is not for password update .Please use /updateMyPassword',400)
        )
    }
    // 2/Filtered out unwanted fileds names that are not allowed to be updated
    const filteredBody = filterObj(req.body,'username','email');
    if(req.file) filteredBody.photo = req.file.filename
    console.log(req.user.id);
    const updateUser = await User.findByIdAndUpdate(req.user.id,filteredBody,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        status:'success',
        data:{
            user:updateUser
        }
    })


})
exports.deleteMe = catchAsync(async ( req,res,next)=>{
    await User.findByIdAndUpdate(req.user.id,{active:false});
    res.status(204).json({
        status:'success',
        data:null
    })
    
})


exports.getAllUser = catchAsync( async (req,res,next)=>{
    const user = await User.find();
    if(!user){
        return next(new AppError("There is no users ",404))
    }
    res.status(200).json({
        status:'success',
        count:user.length,
        data:user
    })


})
exports.getUser = catchAsync(async (req,res,next)=>{
    const user = await User.findById(req.params.id).populate('donation');
    if(!user){
        return next(new AppError('There are no user with that id',404))
    }
    res.status(200).json({
        status:'success',
        data:user
    })
})
exports.updateUser = catchAsync(async (req,res,next)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!user){
        return next(new AppError('There is no user with id',404))
    }
    res.status(200).json({
        status:'success',
        data:user
    })
})
exports.deleteUser = catchAsync(async (req,res,next)=>{
    const user = await User.findOneAndDelete(req.params.id);
    if(!user){
        return next(new AppError('There is no user with id'),404)
    }
    res.status(204).json({
        status:'success',
        data:null
    })
})
