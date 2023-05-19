const express = require("express");
let CheckedInAppointment = require("../../models/CheckedInAppointment");

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

        const newCheckedInAppointment = new CheckedInAppointment({

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

        newCheckedInAppointment.save().then(() => {

            res.json("Appointment added")
    
        }).catch((err) => {
    
            console.log(err)
    
        })

})

//get all appointments
router.get('/', (req,res) => {

    CheckedInAppointment.find().exec((err,appointments) => {

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
    
    CheckedInAppointment.findById(appointmentId,(err,appointment) => {

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

    await CheckedInAppointment.findByIdAndDelete(appointmentId)
        .then(() => {

            res.status(200).send({status: "Appointment deleted"});

        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status: "error with deleting appointment", error: err.message});

        })

})

module.exports = router;