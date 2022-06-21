const mongoose =require('mongoose');

const eventsSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please provide the title of the events']
    },
    description:{
        type:String,
        required:[true,'Please describe the events going to happen']
    },
    image:{
        type:String,
        default:"default.png"
    },
    date:{
        type:Date,
        required:true
    },
    organizer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Charity',
        required:[true,'Please provide the event organizer']
    }
}) 

const Event = mongoose.model('Event',eventsSchema);
module.exports = Event;