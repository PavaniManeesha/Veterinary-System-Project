const mongoose = require('mongoose')

const prescriptionSchema = new mongoose.Schema({
    petid:{
        type:String,
        required:true
    },
    medicine:{
        type:String,
        required:true
    },
    labreport:{
        type:String,
        required:true
    },

    advicegiven:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },
    docid:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('prescription',prescriptionSchema);
