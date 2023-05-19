const mongoose = require ('mongoose');

const inqurySchema = new mongoose.Schema({

    ownerid:{
        type:String,
        required:true
    },
    

    o_name:{
        type:String,
        required:true
    },
    p_number:{
        type:String,
        required:true

    },
    e_address:{
        type:String,
        required:true
    },
    inquiry:{
        type:String,
        required:true

    
    }
   



})
module.exports=mongoose.model('Inqury',inqurySchema);
