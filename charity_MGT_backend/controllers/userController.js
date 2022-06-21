const User = require('../models/userModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');
const  cloudinaryUploader  = require('../middleware/cloudnary')
const uploads = require('../middleware/multer')


exports.uploadUserPhoto = uploads.single('image');

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
    const filteredBody = filterObj(req.body,'username','email','phone','address');
    if(req.file){
        const {path,filename} = req.file;
        upload = await cloudinaryUploader(
          path,
          "auto",
          "userPhoto",
          filename,
        );
        }
       // console.log(upload);
       filteredBody.image = upload.secure_url;
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
    res.status(200).json({
        status:'success',
        message:"user with the Id is deleted successfully"
    })
    
})


exports.getAllUser = catchAsync( async (req,res,next)=>{
    const user = await User.find().populate('donations').populate('tasks');
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
    const user = await User.findById(req.params.id).populate('donations').populate('tasks');
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
    res.status(200).json({
    status:'success',
     message:"charity with the Id is deleted successfully"
    })
})
