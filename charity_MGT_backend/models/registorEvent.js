const mongoose = require("mongoose");

const eventRegisterSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide your name"],
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide the email"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: "true",
  },
  eventId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Event",
      required:"true"
  },
  registeredAt: {
    type: Date,
    default: Date.now(),
  },
});
const EventRegister = mongoose.model("EventRegister", eventRegisterSchema);

module.exports = EventRegister;
