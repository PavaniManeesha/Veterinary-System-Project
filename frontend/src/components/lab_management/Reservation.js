import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import NavBar from './LabsNavBar';


export default function Reservation() {
  const [reservation, setReservation] = useState([]);
 // const [SearchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    function getReservation() {
   
      axois.get("/reservation/reservation")
        .then((res) => {
          console.log(res.data.success);
          setReservation(res.data.existingReservation);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getReservation();
  }, []);
  
  const [serQuary,setSerQuary]=useState("");

  function searchAppointment(event){
        
        setSerQuary(event.target.value);

  }

  //page refresh function

  function refreshPage() {
    window.location.reload(true);
  }

  const deleteData = (reservation) => {
    var result = window.confirm("Do you wont to Delete?",refreshPage());
    console.log(result);
    if (result == true) {
      axois
        .delete(`reservation/delete/${reservation._id}`)
        .then((res) => {}).getReservation()
        .catch((reservation) => {
          alert(reservation);
        });
    } else {
        reservation.preventDefault();
    }
  };

  return (
    <div className="main-container">

        <NavBar />
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                        ALL RESERVATIONS
                    </h3>
                </div>
                <div className="order-section-one-right">
                    <input onChange={searchAppointment} type="search" placeholder="Search" className="search-box" />
                </div>
            </div>
     
            <div className="order-section-two-container">     
                <table Class = "table">
                    <thead id="app-table">

                        <tr id="res">

                            <th className="order-table-header-col-1" scope="col">#</th>
                            <th className="order-table-header-col-1" scope="col">Pet Name</th>
                            <th className="order-table-header-col-1" scope="col">Owner</th>
                            <th className="order-table-header-col-1" scope="col">Doctor</th>
                            <th className="order-table-header-col-1" scope="col">Test</th>
                            <th className="order-table-header-col-1" scope="col">Lab</th>
                            <th className="order-table-header-col-1" scope="col">Date</th>
                            <th className="order-table-header-col-1" scope="col">Time</th>
                            <th className="order-table-header-col-1" scope="col">Contact No</th>
                            <th className="order-table-header-col-1" scope="col">Actions</th>
                         
              
                        </tr>

                    </thead>

                    <tbody id="resbody">
                    {reservation.filter(reservation => 

                      
                      reservation.petOwner.toLowerCase().includes(serQuary) ||
                      reservation.petName.toLowerCase().includes(serQuary)||
                      reservation.testType.toLowerCase().includes(serQuary)

                      ).map((reservation, index) =>(
                        <tr className="order-table-row" key = {reservation._id}>

                            <th className="order-table-col-1" scope="row">{index+1}</th>
                         
                            <td className="order-table-col-1">{reservation.petName}</td>
                            <td className="order-table-col-1">{reservation.petOwner}</td>
                            <td className="order-table-col-1">{reservation.doctor}</td>
                            <td className="order-table-col-1">{reservation.testType}</td>
                            <td className="order-table-col-1">{reservation.lab}</td>
                            <td className="order-table-col-1">{reservation.date}</td>
                            <td className="order-table-col-1">{reservation.time}</td>
                            <td className="order-table-col-1">{reservation.ownerContact}</td>
            
                            <td id="action-button">
                              <a href={"./EditReservation/"+reservation._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(reservation)}}>
                                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </button>
                              </a>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>

                



            </div>
            <br></br>
            <div class="d-grid gap-2 col-3 mx-auto">
            <button className='btn btn-primary'><a href="/LabReport" style={{textDecoration:'none',color:'white'}}>View Reservations for Print</a></button>
                <br></br>
               </div>
        </div>
    </div>

    );
}