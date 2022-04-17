const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'provide the title of the report']
    },
    description:{
        type:String,
        required:[true,'Provide the description']
    },
    status:{
        type:String,
        Enum:['pending','accepted','rejected'],
        default:'pending'

    },
    volunterId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'Provide the voluteers id']
    },
    reportedAt:{
        type:Date,
        default:Date.now()
    }

})
const Report = mongoose.model('Report',reportSchema);
module.exports = Report;