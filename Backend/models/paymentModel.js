import mongoose from "mongoose";

//Creating schema
const Schema = mongoose.Schema;
const paymentSchema = new Schema({

    owner_name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    contact_number : {
        type : String,
        require : true
    },
    pet_name : {
        type : String,
        require : true
    },
    appointment_number : {
        type : String,
        require : true
    },
    appointment_date : {
        type : Date,
        require : true
    }
});

//Auto Genarate createAt & updateAt fields
paymentSchema.set('timestamps', true);

//Exporting schema to the DB
const PaymentModel = mongoose.model('paymentModel', paymentSchema);
export default PaymentModel;