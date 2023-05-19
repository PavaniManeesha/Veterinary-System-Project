import React , {useState,useEffect} from 'react';
import Axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
import NavBar from './AppointmentsNavBar';

export default function EditAppointment(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [name , setName] = useState('');
    const [nic , setNic] = useState();
    const [email , setEmail] = useState('');
    const [contactNo , setContactNo] = useState('');
    const [petName, setPetName] = useState('');
    const [petId, setPetId] = useState('');
    const [petType, setPetType] = useState('');
    const [date, setDate] = useState('');
    const [reasonFrVisit, setReasonFrVisit] = useState('');
    const [availableAppointmentSlot, setAppointmentSlot] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [doctorName, setDoctorName] = useState('');
    
    useEffect(()=>{
        Axios.get(`http://localhost:8000/appointment/get/`+id)
        .then((getData)=>{        
            setName(getData.data.appointment.name);
            setNic(getData.data.appointment.nic);
            setEmail(getData.data.appointment.email);
            setContactNo(getData.data.appointment.contactNo);
            setPetName(getData.data.appointment.petName);
            setPetId(getData.data.appointment.petId);
            setPetType(getData.data.appointment.petType);
            setDate(getData.data.appointment.date);
            setReasonFrVisit(getData.data.appointment.reasonFrVisit);
            setAppointmentSlot(getData.data.appointment.availableAppointmentSlot);
            setDoctorId(getData.data.appointment.doctorId);
            setDoctorName(getData.data.appointment.doctorName);
        })
    },[])

    const sendDataToAPI =()=>{
        const data = {name,nic,email,contactNo,petName,petId,petType,date,reasonFrVisit,availableAppointmentSlot,
                     doctorId,doctorName}
        Axios.put(`http://localhost:8000/appointment/update/${id}`,data)
        .then((res)=>{
            alert("Update Successful");     
        })
        .catch((err)=>{
            alert("Update Unsuccessful");
        })
    }
 
    return(
        <div className="main-container">
            <NavBar/>
            <div className="body-container clearfix">
                <div className="order-section-one-container ">
                    <div className="order-section-one-left ">
                        <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                            EDIT APPOINTMENT
                        </h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <div className="card mt-2 mx-auto p-4 bg-light">
                                <div className="card-body bg-light">
                                    <div className="container">
                                        <form>
                                            <div className="controls">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Name</label><br/>
                                                            <input type="text" value={name} name="OwnerName" className='form-control' onChange={(appointment) => setName(appointment.target.value)} placeholder="Owner Name" required/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form=group">
                                                            <label htmlFor="nic">NIC</label><br/>
                                                            <input type="text" value={nic} name="OwnerNic" className="form-control" onChange={(appointment) => setNic(appointment.target.value)} placeholder="Owner NIC" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="email">Email</label><br/>
                                                            <input type="text" value={email} name="OwnerEmail" className='form-control' onChange={(appointment) => setEmail(appointment.target.value)} placeholder="Owner Email" required/>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label htmlFor="contactNo">Contact No</label>
                                                            <input type="text" value={contactNo} name="OwnerContactNo" className="form-control" onChange={(appointment) => setContactNo(appointment.target.value)} placeholder="Contact No" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="petName">Pet Name</label><br/>
                                                            <input type="text" value={petName} name="petName" className="form-control" onChange={(appointment) => setPetName(appointment.target.value)}  placeholder="Pet Name" required/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="petId">Pet ID</label><br/>
                                                            <input type="text" value={petId} name="petId" className="form-control" onChange={(appointment) => setPetId(appointment.target.value)} placeholder="Pet Id" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="petType">Pet Type</label><br/>
                                                            <input type="text" value={petType} name="petType" className="form-control" onChange={(appointment) => setPetType(appointment.target.value)} placeholder="Pet Type" required/>
                                                        </div>    
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="petType">Appointment Date</label><br/>
                                                            <input type="date" value={date.split('T')[0]} name="date" className="form-control" onChange={(appointment) => setDate(appointment.target.value)} placeholder="Date" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="reasonFrVisit">Reason For Visit</label><br/>
                                                            <select id="reasonFrVisit" value={reasonFrVisit} name="reasonForVisit" class="form-control" onChange={(appointment) => setReasonFrVisit(appointment.target.value)} required>

                                                                <option value="" selected disabled>--Select Reason--</option>
                                                                <option value="General Checkup">General CheckUp</option>
                                                                <option value="Vaccination">Vaccination</option>
                                                                <option value="Grooming">Grooming</option>
                                                                <option value="Other">Other</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="availableAppointmentSlot">Appointment Slot</label><br/>
                                                            <select type="text" id="availableAppointmentSlot" name="appointmentSlot" class="form-control" value={availableAppointmentSlot} onChange={(appointment) => setAppointmentSlot(appointment.target.value)} placeholder="Appointment Slot" required>
                                                                <option value="" selected disabled>--Select Time Slot--</option>
                                                                <option >8.00AM-8.30AM</option>
                                                                <option >8.30AM-9.00AM</option>
                                                                <option >9.30AM-10.00AM</option>
                                                                <option >10.00AM-10.30AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="doctorId">Doctor ID</label><br/>
                                                            <input type="text" value={doctorId} name="doctorId" className="form-control" onChange={(appointment) => setDoctorId(appointment.target.value)} placeholder="Doctor ID" readOnly/><br/>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label htmlFor="doctorName">Doctor Name</label><br/>
                                                            <input type="text" value={doctorName} name="doctorName" className="form-control" onChange={(appointment) => setDoctorName(appointment.target.value)} placeholder="Doctor Name" readOnly/><br/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <button type="submit" onClick={sendDataToAPI} id="submit-btn" className="btn btn-success btn-send  pt-2 btn-block" >EDIT APPOINTMENT</button>
                                                </div>
                                            </div>              
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}