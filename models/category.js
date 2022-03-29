const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide the category of charity'],
    },
    Icon:{
        type:String
    },
    color:{
        type:String
    }
})
Category = mongoose.model('Category',categorySchema);
module.exports = Category;