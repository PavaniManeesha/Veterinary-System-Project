const express = require("express");
let Appointment = require("../../models/Appointment");

const router = express.Router();

//add appointments
router.post('/add',(req,res) => {

        const name = req.body.name;
        const nic = req.body.nic;
        const email = req.body.email;
        const contactNo = req.body.contactNo;
        const petName = req.body.petName;
        const petId = req.body.petId;
        const petType = req.body.petType;
        const date = Date.parse(req.body.date);
        const reasonFrVisit = req.body.reasonFrVisit;
        const availableAppointmentSlot = req.body.availableAppointmentSlot;
        const doctorId = req.body.doctorId;
        const doctorName = req.body.doctorName;

        const newAppointment = new Appointment({

            name,
            nic,
            email,
            contactNo,
            petName,
            petId,
            petType,
            date,
            reasonFrVisit,
            availableAppointmentSlot,
            doctorId,
            doctorName

        });

        newAppointment.save().then(() => {

            res.json("Appointment added")
    
        }).catch((err) => {
    
            console.log(err)
    
        })

})

//get all appointments
router.get('/', (req,res) => {

    Appointment.find().exec((err,appointments) => {

        if(err){

            return res.status(400).json({

                error:err

            });

        }
        return res.status(200).json({

            success:true,
            existingAppointments:appointments

        });
        // return res.send(appointments);

    });

});

//get appointment by id
router.get("/get/:id", async (req,res) => {

    let appointmentId = req.params.id;
    
    Appointment.findById(appointmentId,(err,appointment) => {

        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({

            success: true,
            appointment

        });

    });

})

//get appointment by date
//not finished
router.get("/get/:date",(req,res)=>{
    let appointmentDate = req.params.date;

    Appointment.find({date:appointmentDate},(err,appointments)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            appointments
        });
    });
 });

//update appointment
router.put("/update/:id", async(req,res) => {

    let appointmentId = req.params.id;
    const {name, nic, email, contactNo, petName, petType, date, reasonsFrVisits, availbaleAppointments, doctorId, doctorName} = req.body;

    const updateAppointment = {

        name,
        nic,
        email,
        contactNo,
        petName,
        petType,
        date,
        reasonsFrVisits,
        availbaleAppointments,
        doctorId,
        doctorName

    }

    const update = await Appointment.findByIdAndUpdate(appointmentId, updateAppointment)
    .then(() => {

        res.status(200).send({status: "Appoointment updated"})

    }).catch((err) => {

        console.log(err);
        res.status(500).send({status: "error with updating data", error: err.message});

    })

})
//read one doc id
router.get("/get/doc/:doctorId", async (req,res) => {
    let Docid = req.params.doctorId;
    Appointment.find({doctorId:Docid},(err,appointment) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success: true,
            appointment
        });
    });
})

//delete appointment
router.route("/delete/:id").delete(async (req,res) => {

    let appointmentId = req.params.id;

    await Appointment.findByIdAndDelete(appointmentId)
        .then(() => {

            res.status(200).send({status: "Appointment deleted"});

        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status: "error with deleting appointment", error: err.message});

        })

})

module.exports = router;