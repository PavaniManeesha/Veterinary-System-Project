const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

//app middleware
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

});

const connection = mongoose.connection;
connection.once("open", () => {

    console.log("mongodb Connection success!")

});

//import routes
//appointment management routes
const appointmentRouter = require('./routes/appointment_management/appointments');
const checkedInAppointment = require('./routes/appointment_management/CheckedInAppointments.js');
//lab management routes
const labRoutes = require('./routes/lab_management/labs');
const reservationRouts = require('./routes/lab_management/reservation');
//pharamacy management routes
const medicineRoutes = require("./routes/pharmarcy_management/medicine");
const requestRoutes = require("./routes/pharmarcy_management/request");
//Staff management routes
const doctorRoutes = require("./routes/staff_management/doctors");
const nurseRoutes = require("./routes/staff_management/nurses");
//inventory management router
const medicinesRouter = require("./routes/inventory_management/medicines");
//prescription management
const prescriptionRoutes = require('./routes/prescription_management/prescription');
//import routes
const profilesRoutes = require('./routes/pet_management/profiles');
const inquiriesRoutes = require('./routes/pet_management/inquiries');
//import routes
//const PaymentModel = require('./routes/payment_management/paymentController');
//admin route
const adminRoute = require("./routes/admin")

//route middleware
//appointment management 
app.use('/appointment', appointmentRouter);
app.use('/chekedInAppointment', checkedInAppointment);
//lab management route
app.use("/lab",labRoutes);
app.use("/reservation",reservationRouts);
//Pharamarcy management
app.use("/pharamarcy",medicineRoutes);
app.use("/requests",requestRoutes);
//Staff management
app.use("/doctors",doctorRoutes);
app.use("/nurses",nurseRoutes);
//inventory management
app.use("/medicine",medicinesRouter);
//prescription management
app.use("/prescriptions",prescriptionRoutes);
//pet management
app.use("/profile",profilesRoutes);
app.use("/inquiry",inquiriesRoutes);
//payment management
//app.use("/paymentModel",PaymentModel);

//admin
app.use("/admin",adminRoute);

app.listen(PORT, ()=> {

    console.log(`Server is up and running on port number: ${PORT}`)

}); 



