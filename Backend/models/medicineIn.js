const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    product_name:{
        type:String,
        required:true
    },

    item_no:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    quantity:{
        type:String,
        required:true
    },

    Manufacture_date:{
        type:Date,
        required:true
    },

    expiry_date:{
        type:Date,
        required:true
    },
   
});

module.exports = mongoose.model('medicineIn',postSchema);