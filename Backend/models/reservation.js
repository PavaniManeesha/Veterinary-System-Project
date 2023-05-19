const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    petName:{
        type: String,
        required:true
    },

    petOwner:{
        type: String,
        required:true
    },

    doctor:{
        type: String,
        required:true
    },

    testType:{
        type: String,
        required:true
    },

    lab:{
        type: String,
        required:true
    },

    time:{
        type: String,
        required:true
    },

    date:{
        type: String,
        required:true
    },

    ownerContact:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('reservation', reservationSchema);