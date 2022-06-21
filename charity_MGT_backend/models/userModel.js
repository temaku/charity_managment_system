const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const crypto = require('crypto');



const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required: [true, "Please provide your username"]
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  image: {
    type: String,
    default: "default.jpg",
  },
  phone:{
    type:String,
    default:"None"
  },
  address:{
    type:String,
    default:"None"
  },
  role: {
    type: String,
    enum: ["donor", "volunteers"],
    default: "donor",
  },
  noOfDonation:{
    type:Number,
    default:0
  },
  totalDonations:{
    type:Number,
    default:0
  },
 

  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  status:{
    type:String,
    Enum:['pending','Active'],
    default:'pending'

},
  passwordChangedAt:Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: false
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
);
userSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

userSchema.virtual('donations', {
  ref: 'Donation',
  foreignField: 'donor',
  localField: '_id'
});
userSchema.virtual('tasks',{
  ref:'Task',
  foreignField:'volunteer',
  localField:'_id'

})


userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  next();
});
userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});
userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword){
  return  await bcrypt.compare(candidatePassword,userPassword);

}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp){
  if(this.passwordChangedAt){
      // console.log(this.passwordChangedAt,JWTTimestamp);
      const changedTimestamp = parseInt(this.passwordChangedAt.getTime() /1000,
      10);
     // console.log(changedTimestamp,JWTTimestamp);

      return JWTTimestamp < changedTimestamp;
  }
  return false;
}
userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(8).toString('hex');

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
const User = mongoose.model('User',userSchema);
module.exports = User;