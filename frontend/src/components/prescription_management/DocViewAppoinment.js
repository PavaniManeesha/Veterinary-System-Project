import React, { useState, useEffect } from "react";
import axois from "axios";
import NavBar from "./PrescriptionNavBar";
import { Link } from "react-router-dom";
import "../styles/navBar.css";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/retrieveTable.css";


export default function Appointments() {
    const [Appoinments, setAppoinments] = useState([]);
   // const [SearchKeyword, setSearchKeyword] = useState("");
   const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    console.log(date);
  
    useEffect(() => {
      function getAppoinments() {
     
        axois.get("http://localhost:8000/appointment/get/doc/"+ window.localStorage.getItem('docID'))
          .then((res) => {
            console.log(res.data.success);
            setAppoinments(res.data.appointment);
            console.log(window.localStorage.getItem('docID'))
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      getAppoinments();
    }, []);
    
    const [serQuary,setSerQuary]=useState("");
  
    function searchAppointment(event){
          
          setSerQuary(event.target.value);
  
    }
    return (
      <div className="main-container">
  
          <NavBar />
          <div className="body-container clearfix">
  
              <div className="order-section-one-container ">
                  <div className="order-section-one-left ">
                      <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                          My APPOINTMENTS
                      </h3>
                      
                  </div>
                  <div className="order-section-one-right">
                      <input onChange={searchAppointment} type="search" placeholder="Search" className="search-box" />
                  </div>
              </div>
       
              <div className="order-section-two-container">     
                  <table Class = "table">
                      <thead id="app-table">
  
                          <tr className="abc" >
  
                              
                              
                              <th className="order-table-header-col-1" scope="col">Pet Name</th>
                              
                              <th className="order-table-header-col-1" scope="col">Pet Type</th>
                              <th className="order-table-header-col-1" scope="col">Reason for visit</th>
                              <th className="order-table-header-col-1" scope="col">Time</th>
                              <th className="order-table-header-col-1" scope="col">Action</th>
                          </tr>
  
                      </thead>
  
                      <tbody>
                      {Appoinments&&Appoinments.filter(appointment => 
  
                        appointment.petName.includes(serQuary) ||
                        appointment.petName.toLowerCase().includes(serQuary)
                       
  
                        ).map((appointment, index) =>(
                          <tr className="order-table-row" >
  
                             
                             
                             
                              <td className="order-table-col-1">{appointment.petName}</td>
                              
                              <td className="order-table-col-1">{appointment.petType}</td>
                              <td className="order-table-col-1">{appointment.reasonFrVisit}</td>
                              <td className="order-table-col-1">{appointment.availableAppointmentSlot}</td>
  
                              <td id="action-button">
                              <Link to={"/AllPrescription/" + appointment.petId} id="table-button"  className="btn btn-outline-primary btn-sm">View Prescription</Link>
                                 
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