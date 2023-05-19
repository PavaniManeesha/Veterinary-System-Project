const mongoose = require('mongoose');
//const { model } = require('mongoose');
//const { stringify } = require('querystring');

const labSchema = new mongoose.Schema({
    labType:{
        type:String,
        required:true
    },
    
    assignedLabAssistant:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model('labs', labSchema);