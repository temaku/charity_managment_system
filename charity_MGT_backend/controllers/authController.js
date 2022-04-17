const User = require('../models/userModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../middleware/email');

exports.signup = catchAsync(async (req,res)=>{
    const user = await User.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        role:req.body.role,
        photo:req.body.photo,
        phone:req.body.phone,
        address:req.body.address

 
    })
    user.password = undefined;
    res.status(201).json({
        status:'success',
        user
    })
})
exports.login = catchAsync(async (req, res, next) => {
  const {username, password } = req.body;

  // 1) Check if email and password exist
  if (!username || !password) {
    return next(new AppError('Please provide username and password!', 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ username }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  const token = jwt.sign({id:user.id},process.env.JWT_SECRET,{  expiresIn: process.env.JWT_EXPIRES_IN});
  
    user.password = undefined;
    res.status(200).json({
      status: 'success',
      token,
       user
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

  exports.forgotPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on POSTed email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(new AppError('There is no user with email address.', 404));
    }
  
    // 2) Generate the random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
  
    // 3) Send it to user's email
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/auth/resetPassword/${resetToken}`;
  
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
  
    try {
      await sendEmail({
        email: user.email,
        subject: 'Your password reset token (valid for 10 min)',
        message
      });
  
      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!'
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
  
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
  
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }
    });
  
    // 2) If token has not expired, and there is user, set the new password
    if (!user) {
      return next(new AppError('Token is invalid or has expired', 400));
    }
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
  
    // 3) Update changedPasswordAt property for the user
    // 4) Log the user in, send JWT
    const token = jwt.sign({userId:user.id},process.env.JWT_SECRET,{  expiresIn: process.env.JWT_EXPIRES_IN});
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
         user
      });
  
   
  });
  
  exports.updatePassword = catchAsync(async (req, res, next) => {
    // 1) Get user from collection
    const user = await User.findById(req.user.id).select('+password');
  
    // 2) Check if POSTed current password is correct
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
      return next(new AppError('Your current password is wrong.', 401));
    }
  
    // 3) If so, update password
    user.password = req.body.password;
    await user.save();
    // User.findByIdAndUpdate will NOT work as intended!
  
    // 4) Log user in, send JWT
    const token = jwt.sign({userId:user.id},process.env.JWT_SECRET,{  expiresIn: process.env.JWT_EXPIRES_IN});
      user.password = undefined;
      res.status(200).json({
        status: 'success',
        token,
         user
      });
    });