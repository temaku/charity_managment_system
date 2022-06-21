const mongoose = require("mongoose");

const budgetAllocateSchema = mongoose.Schema({
    reason:{
        type:String,
        required:[true,'Please provide the reason of budget'],
    },
    charity:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Charity',
        required:true
    },
    description:{
        type:String,
        required:[true,"The description on the budget allocated"]
    },
    status:{
        type:String,
        enum:['pending','Accepted','REjected'],
        default:'pending'

    },
    currentAmount:{
        type:Number
    },
    amount:{
        type:Number
    },

},
{
    timestamps:true
}
)
Budget = mongoose.model('Budget', budgetAllocateSchema);
module.exports = Budget;