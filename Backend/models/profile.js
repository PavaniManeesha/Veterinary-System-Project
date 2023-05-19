const mongoose = require ('mongoose');

const profileSchema = new mongoose.Schema({

    pet_owner_name:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true

    },
    email_address:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true

    
    },
    pet_name:{
        type:String,
        required:true
    },
    pet_age:{
        type:String,
        required:true
    },
    pet_Type:{
        type:String,
        required:true
    },
    
    breed:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    pet_Status:{
        type:String,
        required:true
    },
    last_Vaccinate_Date:{
        type:Date,
        required:true
    }



})
module.exports=mongoose.model('Profile',profileSchema);
