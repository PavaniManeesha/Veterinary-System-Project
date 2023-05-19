const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({

    docName:{
        type:String,
        required:true
    },

    docID:{
        type:Number,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    specialization:{
        type:String,
        required:true
    },

    experience:{
        type:Number,
        require:true
    },

    salary:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    }

    
});


module.exports = mongoose.model('Doctor',doctorSchema);