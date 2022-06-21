const mongoose = require('mongoose');

const FundraiseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please provide the title to Funraise']
    },
    description:{
        type:String,
        required:[true,'Please provide the description']
    },
    image:{
        type:String,
        default:"default.png"
    },
    amount:{
        type:Number,
        default:0
        },
},
       
{
    timestamps:true
}

)

const Fundraise = mongoose.model('Fundraise',FundraiseSchema);
module.exports = Fundraise;