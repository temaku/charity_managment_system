const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const crypto = require('crypto');



const adminSchema = new mongoose.Schema({
  username:{
    type:String,
    required: [true, "Please provide your adminname"]
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  role: {
    type: String,
    default: "admin",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordChangedAt:Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
);
adminSchema.virtual('id').get(function () {
  return this._id.toHexString();
});


adminSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  next();
});
adminSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});
adminSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword){
  return  await bcrypt.compare(candidatePassword,userPassword);

}

adminSchema.methods.changedPasswordAfter = function(JWTTimestamp){
  if(this.passwordChangedAt){
      // console.log(this.passwordChangedAt,JWTTimestamp);
      const changedTimestamp = parseInt(this.passwordChangedAt.getTime() /1000,
      10);
     // console.log(changedTimestamp,JWTTimestamp);

      return JWTTimestamp < changedTimestamp;
  }
  return false;
}
adminSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  //  console.log({ resetToken }, this.passwordResetToken);
  //console.log(this.passwordResetToken);
  console.log(resetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};
const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin;