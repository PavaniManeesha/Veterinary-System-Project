import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import "./styles/header.css";
import "./styles/common.css";
import "./styles/retrieveTable.css";
import NavBar from './AppointmentsNavBar';


export default function DailyCheckedInAppointments() {
  const [Appoinments, setAppoinments] = useState([]);

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
  console.log(date);

  useEffect(() => {
    function getAppoinments() {
   
      axois.get("http://localhost:8000/chekedInAppointment/")
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
  
  //page refresh function
  function refreshPage() {
    window.location.reload(false);
  }

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

                        </tr>

                    </thead>

                    <tbody>
                    {Appoinments.filter(appointment => 

                        appointment.date.split('T')[0].includes(date)


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

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    );
}