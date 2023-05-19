import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import NavBar from './AppointmentsNavBar';


export default function Appointments() {
  const [Appoinments, setAppoinments] = useState([]);
  const [serQuary,setSerQuary]=useState("");

 // const [SearchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    function getAppoinments() {
   
      axois.get("http://localhost:8000/appointment/")
        .then((res) => {
          console.log(res.data.success);
          setAppoinments(res.data.existingAppointments);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAppoinments();
  }, []);
  
  function searchAppointment(event){
        
    setSerQuary(event.target.value);

  }

  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  }

  const deleteData = (appointment) => {
    var result = window.confirm("Do you want to delete this appointment?");
    console.log(result);
    if (result === true) {
      axois
        .delete(`http://localhost:8000/appointment/delete/${appointment._id}`)
        .then((res) => {})
        .catch((appointment) => {
          alert(appointment);
        });
    } else {
      appointment.preventDefault();
    }
  };

  return (
    <div className="main-container">

        <NavBar />
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                        ALL APPOINTMENTS
                    </h3>
                </div>
                <div className="order-section-one-right">
                    <input onChange={searchAppointment} type="search" placeholder="Search" className="search-box" />
                </div>
            </div>
     
            <div className="order-section-two-container">     
                <table Class = "table">
                    <thead id="app-table">

                        <tr >

                            <th className="order-table-header-col-1" scope="col">#</th>
                            
                            <th className="order-table-header-col-1" scope="col">Name</th>
                            <th className="order-table-header-col-1" scope="col">NIC</th>
                            <th className="order-table-header-col-1" scope="col">ContactNo</th>
                            <th className="order-table-header-col-1" scope="col">Pet Name</th>
                            <th className="order-table-header-col-1" scope="col">Pet ID</th>
                            <th className="order-table-header-col-1" scope="col">Pet Type</th>
                            <th className="order-table-header-col-1" scope="col">Date</th>
                            <th className="order-table-header-col-1" scope="col">Reason For Visit</th>
                            <th className="order-table-header-col-1" scope="col">Appointment Time</th>
                            <th className="order-table-header-col-1" scope="col">Doctor Name</th>
                            <th className="order-table-header-col-1" scope="col">Action</th>

                        </tr>

                    </thead>

                    <tbody>
                    {Appoinments.filter(appointment => 

                      appointment.nic.includes(serQuary) ||
                      appointment._id.includes(serQuary) ||
                      appointment.name.toLowerCase().includes(serQuary)||
                      appointment.name.includes(serQuary)

                      ).map((appointment, index) =>(
                        <tr className="order-table-row" key = {appointment.name}>

                            <th className="order-table-col-1" scope="row">{index+1}</th>
                            
                            <td className="order-table-col-1">
                                <a href={'/appointmentDetails/'+appointment._id} style= {{textDecoration:'none'}}>
                                {appointment.name}
                                </a>
                            </td>
                            <td className="order-table-col-1">{appointment.nic}</td>
                            <td className="order-table-col-1">{appointment.contactNo}</td>
                            <td className="order-table-col-1">{appointment.petName}</td>
                            <td className="order-table-col-1">{appointment.petId}</td>
                            <td className="order-table-col-1">{appointment.petType}</td>
                            <td className="order-table-col-1">{appointment.date.split('T')[0]}</td>
                            <td className="order-table-col-1">{appointment.reasonFrVisit}</td>
                            <td className="order-table-col-1">{appointment.availableAppointmentSlot}</td>
                            <td className="order-table-col-1">{appointment.doctorName}</td>
                            <td id="action-button">
                              <a href={"./updateAppointment/"+appointment._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(appointment)}}>
                                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </button>
                              </a>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    );
}