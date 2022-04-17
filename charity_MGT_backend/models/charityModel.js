const mongoose = require('mongoose');
const validator = require("validator");

const charitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please fill the name of charity']
    },
    description:{
        type:String,
        required:[true,'Please brief the description of charity']  
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    image:{
        type:String,
        default:"default.png"
    },
    email:{
        type:String,
        required:[true,'Please provide your charity email'] ,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"], 
    },
    address:{
        type:String,
        default:"adrress"
    },
    phone:{
        type:String,
        default:"phone"
    },
    NumOfDonors:{
        type:Number,
        default:0
    },
    SumofDonations:{
        type:Number,
        default:0
    }
    
},
    {
        timestamps:true
    }

)
Charity = mongoose.model('Charity',charitySchema);
module.exports = Charity;
