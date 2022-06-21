const mongoose = require('mongoose');
const donateFundSchema = mongoose.Schema({
    fundraiseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Fundraise',
        required:[true,'Please provide the id of the fundrais']
    },
    donateOption:{
        type:String,
        Enum:['telebirr','hellocash','CbeBirr'],
        default:'telebirr'
    },
    status:{
        type:String,
        Enum:['pending','accepted','rejected'],
        default:'pending'

    },
    phone:{
        type:Number,
        required:[true,'Please provide phone correctly']
    },
    password:{
        type:String,
        select:false,
        required:[true,'Please provide password of respective fundraiseOption']
    },
    donate:{
        type:Number,
        required:[true,'Please provide the amount to fundriase']
    },
    fundraisedAt:{
        type:Date,
        default:Date.now()
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    }
})

const DonateFund = mongoose.model('DonateFund',donateFundSchema);
module.exports = DonateFund;