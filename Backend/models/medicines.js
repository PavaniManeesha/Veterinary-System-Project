const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    
    medicineid:{
        type:String,
        required:true
    },
    medicinename:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    manufacture:{
        type:String,
        required:true
    },
    expire:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('medicine',medicineSchema);