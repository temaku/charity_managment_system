const Admin = require('../models/adminModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const crypto = require('crypto');
const sendEmail = require('../middleware/email');
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

exports.uploadAdminPhoto = upload.single('image');
exports.resizeAdminPhoto = catchAsync(async (req,res,next)=>{
  if(!req.file) return next();
  req.file.filename = `admin-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
  .resize(500,500)
  .toFormat('jpeg')
  .jpeg({ quality:90 })
  .toFile(`./public/uploads/admins/${req.file.filename}`);

  next();
})
const filterObj = (obj,...allowedFields)=>{
  const newObj = {};
  Object.keys(obj).forEach(el=>{
      if(allowedFields.includes(el)) newObj[el] = obj[el];
  })
  return newObj;
}


exports.signup = catchAsync(async (req,res)=>{

  console.log('inside the sign up');
    const admin = await Admin.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        role:req.body.role,
        photo:req.body.photo
 
    })
    admin.password = undefined;
    res.status(201).json({
        status:'success',
        admin
    })
})
exports.login = catchAsync(async (req, res, next) => {
  const {username, password } = req.body;

  // 1) Check if email and password exist
  if (!username || !password) {
    return next(new AppError('Please provide username and password!', 400));
  }
  // 2) Check if user exists && password is correct
  const admin = await Admin.findOne({ username }).select('+password');

  if (!admin || !(await admin.correctPassword(password, admin.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  const token = jwt.sign({id:admin.id},process.env.JWT_SECRET,{  expiresIn: process.env.JWT_EXPIRES_IN});
  const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  
    res.cookie('jwt', token, cookieOptions);
    // Remove password from output
    admin.password = undefined;
    res.status(200).json({
      status: 'success',
      token,
       admin
    });

 
});

  exports.logout = (req,res)=>{
    res.cookie('jwt','loggedout',{
      expires: new Date(Date.now() + 10*1000),
      httpOnly:true
    });
    res.status(200).json({status:
    "success"})
  }

  exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
      return next(
        new AppError('You are not logged in! Please log in to get access.', 401)
      );
    }
  
    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    // 3) Check if user still exists
    const currentAdmin = await Admin.findById(decoded.id);
    if (!currentAdmin) {
      return next(
        new AppError(
          'The admin belonging to this token does no longer exist.',
          401
        )
      );
    }
  
    // 4) Check if user changed password after the token was issued
    if (currentAdmin.changedPasswordAfter(decoded.iat)) {
      return next(
        new AppError('admin recently changed password! Please log in again.', 401)
      );
    }
  
    // GRANT ACCESS TO PROTECTED ROUTE
    req.admin = currentAdmin;
    next();
  });
  
  exports.restrictTo = (...roles) => {
    return (req, res, next) => {
      // roles ['admin', 'lead-guide']. role='user'
      if (!roles.includes(req.admin.role)) {
        return next(
          new AppError('You do not have permission to perform this action', 403)
        );
      }
  
      next();
    };
  };

  exports.forgotPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on POSTed email
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return next(new AppError('There is no admin with email address.', 404));
    }
  
    // 2) Generate the random reset token
    const resetToken = admin.createPasswordResetToken();
    console.log(resetToken);
    await admin.save({ validateBeforeSave: false });
  
    // 3) Send it to user's email
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/admin/resetPassword/${resetToken}`;
  
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
  
    try {
      await sendEmail({
        email: admin.email,
        subject: 'Your password reset token (valid for 10 min)',
        message
      });
  
      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!'
      });
    } catch (err) {
      admin.passwordResetToken = undefined;
      admin.passwordResetExpires = undefined;
      await admin.save({ validateBeforeSave: false });
  
      return next(
        new AppError(err),
        500
      );
    }
  });
  
  exports.resetPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on the token
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

      //console.log(hashedToken);
  
    const admin = await Admin.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }
    });
  
    // 2) If token has not expired, and there is user, set the new password
    if (!admin) {
      return next(new AppError('Token is invalid or has expired', 400));
    }
    admin.password = req.body.password;
    admin.passwordResetToken = undefined;
    admin.passwordResetExpires = undefined;
    await admin.save();
  
    // 3) Update changedPasswordAt property for the user
    // 4) Log the user in, send JWT
    const token = jwt.sign({adminId:admin.id},process.env.JWT_SECRET,{  expiresIn: process.env.JWT_EXPIRES_IN});
    const cookieOptions = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
      };
      if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    
      res.cookie('jwt', token, cookieOptions);
      // Remove password from output
      admin.password = undefined;
      res.status(200).json({
        status: 'success',
        token,
         admin
      });
  
   
  });
  exports.getAllAdmins = catchAsync(async (req,res,next)=>{
    const admins = await Admin.find();
    if(!admins){
      return next( new AppError('No charity found ',404))
    }
    res.status(200).json({
      status:"success",
      count:admins.length,
      data:admins
    })
    
    
  })
  
  exports.updatePassword = catchAsync(async (req, res, next) => {
    // 1) Get user from collection
    const admin = await Admin.findById(req.admin.id).select('+password');
  
    // 2) Check if POSTed current password is correct
    if (!(await admin.correctPassword(req.body.passwordCurrent, admin.password))) {
      return next(new AppError('Your current password is wrong.', 401));
    }
  
    // 3) If so, update password
    admin.password = req.body.password;
    await admin.save();
    // User.findByIdAndUpdate will NOT work as intended!
  
    // 4) Log user in, send JWT
    const token = jwt.sign({adminId:admin.id},process.env.JWT_SECRET,{  expiresIn: process.env.JWT_EXPIRES_IN});
    const cookieOptions = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
      };
      if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    
      res.cookie('jwt', token, cookieOptions);
      // Remove password from output
      user.password = undefined;
      res.status(200).json({
        status: 'success',
        token,
         admin
      });
    });
 exports.updateAdminProfile =catchAsync(async (req,res,next)=>{
   
      const filteredBody = filterObj(req.body,'username,email')
      console.log("inside the update the profile");
      if(req.file){
        filteredBody.photo = req.file.filename;
      }
     
      const admin = await  Admin.findByIdAndUpdate(req.admin.id,filteredBody,{
        new:true,
        runValidators:true
    
      })
      console.log("outsiede");
      if(!admin){
        return next(new AppError('There is no admin with that id',404))
      }
      res.status(200).json({
        status:'success',
        data:admin
      })
    
    })