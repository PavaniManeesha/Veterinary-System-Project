import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './AppointmentsNavBar';
import "../styles/common.css";
import "../styles/supun_css/appointmentForm.css";

export default function CreateAppointment() {

  const [focused,setFocused] = useState(false);

  //Getting input values
  const [name, setName] = useState("");
  const [nic, setNIC] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [petName, setPetName] = useState("");
  const [petId, setPetId] = useState("");
  const [petType, setPetType] = useState("");
  const [date, setDate] = useState("");
  const [reasonFrVisit, setReasonFrVisit] = useState("");
  const [availableAppointmentSlot, setAppointmentSlot] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctorName, setDoctorName] = useState("");

  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  }

  const handleFocus = (e) => {
    setFocused(true);
  };

  //Creating new Appointment
  function sendData(s){
    s.preventDefault();

    //Creating object
    const newAppointment ={
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
    }
    
    //passing data to the DB
    axios.post("http://localhost:8000/appointment/add", newAppointment).then(()=>{

      alert("Appointment successfully added",refreshPage());
      console.log(newAppointment);

    }).catch((err)=>{

      alert("Error: Appointment not added");
      console.log(err);

    })

  }

  return (
          <div className="main-container">
            <NavBar/>
            <div className="body-container clearfix">

              <div className="order-section-one-container ">
                  <div className="order-section-one-left ">
                      <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                        ADD APPOINTMENTS
                      </h3>
                  </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                      <div className="card-body bg-light">
                        <div className="container">
                          <form onSubmit={sendData}>

                            <div className="controls">
                            
                              <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="name">Name</label><br/>
                                      <input type="text" id="name" name="name" class="form-control" onChange={(event)=>{

                                        setName(event.target.value);

                                      }} pattern="[A-Za-z\s]{3,30}" required onBlur={handleFocus} focused={focused.toString()}/>
                                      <span id="nameSpan">Name should be 3-30 letters and shouldnt include any numbers or special characters!</span>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="nic">NIC</label><br/>
                                      <input className ="form-input" type="text" id="nic" name="nic" class="form-control" onChange={(event)=>{

                                        setNIC(event.target.value);

                                      }} pattern="(([0-9][vV]|[0-9])){12,13}" required onBlur={handleFocus} focused={focused.toString()}/>
                                      <span id="nicSpan">NIC should be only 12 digits or 12 digits and letter V and shouldnt include any other letters or special characters!</span>
                                    </div>
                                  </div>
                              </div>

                              <div className="row">

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="email">Email</label><br/>
                                    <input type="email" id="email" name="email" class="form-control" onChange={(event)=>{

                                      setEmail(event.target.value);

                                    }} required onBlur={handleFocus} focused={focused.toString()}/>
                                    <span id="emailSpan">Please enter a valid email address!</span>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="contactNo">Contact No</label>
                                    <input type="text" id="contactNo" name="contactNo" class="form-control" onChange={(event)=>{

                                      setContactNo(event.target.value);

                                    }} pattern="^[0-9]{10}$" required onBlur={handleFocus} focused={focused.toString()}/>
                                    <span id="contactNoSpan">Contact number should contain 10 numbers and shoudnt include any letters or special characters!</span>
                                  </div>
                                </div>

                              </div>

                              <div className="row">

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="petName">Pet Name</label><br/>
                                    <input type="text" id="petName" name="petName" class="form-control" onChange={(event)=>{

                                      setPetName(event.target.value);

                                    }} pattern="[A-Za-z]{3,12}" required onBlur={handleFocus} focused={focused.toString()}/>
                                    <span id="petNameSpan">Pet name should be 3-12 letters and shouldnt include any numbers or special characters!</span>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="petId">Pet ID</label><br/>
                                    <input type="text" id="petId" name="petId" class="form-control" onChange={(event)=>{

                                      setPetId(event.target.value);

                                   }} onBlur={handleFocus} focused={focused.toString()}/>
                                   {/* pattern="^[A-Za-z0-9_-]{24}*$" */}
                                   <span id="petIdSpan">Pet ID should be 24 letters and numbers and shouldnt contain any special characters!</span>
                                 </div>
                               </div>

                             </div>
                             <div className="row">

                               <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="petType">Pet Type</label><br/>
                                    <input type="text" id="petType" name="petType" class="form-control" onChange={(event)=>{

                                      setPetType(event.target.value);

                                    }} pattern="[A-Za-z]{3,12}" onBlur={handleFocus} required focused={focused.toString()}/>
                                    <span id="petTypeSpan">Pet type should be 3-10 letters and shouldnt include any numbers or special characters!</span>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="date">Date</label><br/>
                                    <input type="date" id="date" name="date" class="form-control" onChange={(event)=>{

                                      setDate(event.target.value);

                                    }} required/>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="reasonFrVisit">Reason For Visit</label><br/>
                                    <select id="reasonFrVisit" name="reasonFrVisit" class="form-control" onChange={(event)=>{

                                      setReasonFrVisit(event.target.value);

                                    }} required>

                                      <option  selected disabled value="0">--Select Reason--</option>
                                      <option value="General Checkup">General CheckUp</option>
                                      <option value="Vaccination">Vaccination</option>
                                      <option value="Grooming">Grooming</option>
                                      <option value="other">Other</option>

                                    </select>
                                    <span>Please select a reason for the appointment from the given list!</span>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="availableAppointmentSlot">Appointment Slot</label><br/>
                                    <select type="text" id="availableAppointmentSlot" name="availableAppointmentSlot" class="form-control" onChange={(event)=>{

                                      setAppointmentSlot(event.target.value);

                                    }} data-error="Appointment Slot is required." required>
                                      <option value="0" selected disabled>--Select Time Slot--</option>
                                      <option value="8.00AM-8.30AM">8.00AM-8.30AM</option>
                                      <option value="8.30AM-9.00AM">8.30AM-9.00AM</option>
                                      <option value="9.30AM-10.00AM">9.30AM-10.00AM</option>
                                      <option value="10.00AM-10.30AM">10.00AM-10.30AM</option>
                                    </select>
                                    <span>Please select a reason for the appointment from the given list!</span>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="doctorId">Doctor ID</label><br/>
                                    <input type="text" id="doctorId" name="doctorId" class="form-control" onChange={(event)=>{

                                      setDoctorId(event.target.value);

                                    }} data-error="Doctor ID is required." required/>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="doctorName">Doctor Name</label><br/>
                                    <input type="text" id="doctorName" name="doctorName" class="form-control" onChange={(event)=>{

                                      setDoctorName(event.target.value);
                                      
                                    }} data-error="Doctor Name is required." required/>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-12">
                                <input type="submit" id="submit-btn" className="btn btn-success btn-send  pt-2 btn-block" value="ADD APPOINTMENT"></input>
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
      
    )

}