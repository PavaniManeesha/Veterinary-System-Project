const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema({

    nurseName:{
        type:String,
        required:true
    },

    nId:{
        type:String,
        required:true
    },

    nAge:{
        type:Number,
        required:true
    },

    workEx:{
        type:Number,
        required:true
     },

    gender:{
        type:String,
        require:true
     },

    nSalary:{
        type:Number,
        require:true
     }

});


module.exports = mongoose.model('nurse',nurseSchema);