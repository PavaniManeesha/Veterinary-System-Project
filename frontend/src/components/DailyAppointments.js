import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import "./styles/header.css";
import "./styles/common.css";
import "./styles/retrieveTable.css";
import NavBar from './AppointmentsNavBar';
import axios from "axios";


export default function DailyAppointments() {
  const [Appoinments, setAppoinments] = useState([]);

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
  console.log(date);

  const [serQuary,setSerQuary]=useState(date);

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
        
    setSerQuary(event);

  }

  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  }

  const deleteData = (appointment) => {
    var result = window.confirm("Do you want to tag this appointment as Checked In?");
    console.log(result);
    if (result === true) {
      
      axios.post("http://localhost:8000/chekedInAppointment/add", appointment).then(()=>{
        alert("Appointment tagged as checked in successfully");
        console.log(appointment);
      }).catch((err)=>{

        alert("Error: Appointment is not tagged try again");
        console.log(err);
  
      })

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
                        DAILY APPOINTMENTS
                    </h3>
                </div>
                <div className="order-section-one-right">
                    <input onChange={searchAppointment} type="search" placeholder="Search" className="search-box" hidden/>
                </div>
            </div>
     
            <div className="order-section-two-container">     
                <table Class = "table">
                    <thead id="app-table">

                        <tr >

                            <th className="order-table-header-col-1" scope="col">#</th>
                            <th className="order-table-header-col-1" scope="col">Appointment ID</th>
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

                      appointment.date.split('T')[0].includes(serQuary)

                      ).map((appointment, index) =>(
                        <tr className="order-table-row" key = {appointment._id}>

                            <th className="order-table-col-1" scope="row">{index+1}</th>
                            <td className="order-table-col-1">
                                <a href={'/apoointmentDetails/'+appointment._id} style= {{textDecoration:'none'}}>
                                {appointment._id}
                                </a>
                            </td>
                            <td className="order-table-col-1">{appointment.name}</td>
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
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-info btn-sm" onClick={() => {deleteData(appointment)}}>
                                    <i className="fa-solid fa-check"></i>&nbsp;Check In
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