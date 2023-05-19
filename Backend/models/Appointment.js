const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({

    name: {

        required: true,
        type: String

    },
    nic: {

        required: true,
        type: String

    },
    email: {

        required: true,
        type: String

    },
    contactNo: {

        required: true,
        type: String

    },
    petName: {

        required: true,
        type: String

    },
    petId: {

        type: String

    },
    petType: {

        required: true,
        type: String

    },
    date: {

        required: true,
        type: Date

    },
    reasonFrVisit: {

        required: true,
        type: String

    },
    availableAppointmentSlot: {

        type: String

    },
    doctorId: {

        required: true,
        type: String

    },
    doctorName: {

        required: true,
        type: String

    }

})

const Appointment = mongoose.model("Appointment",appointmentSchema);

module.exports = Appointment;