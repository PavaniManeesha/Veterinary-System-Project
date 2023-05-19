import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
// import "../CSS/style.css";
import NavBar from './StaffNav';


export default function DocView() {
  const [Doctor, setDoctor] = useState([]);

  
  function refreshpage() {
      window.location.reload(false);
  }   
    
  useEffect(() => {
    function getdoctor() {
   
      axois.get("http://localhost:8000/doctors/doctor/")
        .then((res) => {
          console.log(res.data);
          setDoctor(res.data.existingPosts);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getdoctor();
  }, []);
  //
  const deleteData = (e) => {
    var result = window.confirm("Do you want to Delete?",refreshpage());

    if (result == true) {
      axois
        .delete(`http://localhost:8000/doctors/doctor/delete/${e._id}`)
        .then((res) => {})
        .catch((e) => {
          alert(e);
        });
    } else {
      e.preventDefault();
    }
  };
  
  const [serQuary,setSerQuary]=useState("");

  function searchDoc(event){
        setSerQuary(event.target.value);
  }
  
  return (
    <div className="main-container">

         <NavBar /> 
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                        ALL DOCTOR DETAILS
                    </h3>
                </div>
                <div className="order-section-one-right">
                    <input type="search" placeholder="Search Name" className="search-box" onChange={searchDoc}/>
                </div>
            </div>
     
            <div className="order-section-two-container">     
                <table Class = "table">
                    <thead id="app-table">

                        <tr >
                            <th className="order-table-header-col-1" scope="col">#</th>
                            <th className="order-table-header-col-1" scope="col">DOCTOR NAME</th>
                            <th className="order-table-header-col-1" scope="col">DOCTOR ID</th>
                            <th className="order-table-header-col-1" scope="col">AGE</th>
                            <th className="order-table-header-col-1" scope="col">SPECIALIZATION</th>
                            <th className="order-table-header-col-1" scope="col">EXPERIENCE</th>
                            <th className="order-table-header-col-1" scope="col">SALARY</th>
                            <th className="order-table-header-col-1" scope="col">----------ACTION---------</th>
                           

                        </tr>

                    </thead>

                    <tbody>
                    {Doctor && Doctor.filter(Doctor =>
                      Doctor.docName.includes(serQuary)
                    ).map((Doctor, index) =>(
                        <tr className="order-table-row" key = {Doctor._id}>

                            <th className="order-table-col-1" scope="row">{index+1}</th>                          
                            <td className="order-table-col-1">{Doctor.docName}</td>
                            <td className="order-table-col-1">{Doctor.docID}</td>
                            <td className="order-table-col-1">{Doctor.age}</td>
                            <td className="order-table-col-1">{Doctor.specialization}</td>
                            <td className="order-table-col-1">{Doctor.experience}</td>
                            <td className="order-table-col-1">{Doctor.salary}</td>
                            
                            <td id="action-button">
                              <a href={"/Updatedoc/"+ Doctor._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(Doctor)}}>
                                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </button>
                              </a>
                              
                             
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {/* <a className="b11" href="/AddDocter"><button type="button" class="btn btn-outline-success"> ADD DOCTOR</button></a> */}
        </div>
    </div>

    );
    
 }