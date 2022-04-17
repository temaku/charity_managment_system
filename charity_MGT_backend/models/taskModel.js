const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    volunteer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide the volunteer ']
    },
    task:{
        type:String,
        required:[true,'Please provide the task assgned']
    },
    status:{
        type:String,
        Enum:['pending','accepted','rejected'],
        default:'pending'

    },
    description:{
        type:String,
        required:[true,'Please provide the desc of the task']
    },
    assignedAt:{
        type:Date,
        default:Date.now()
    }
})

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;