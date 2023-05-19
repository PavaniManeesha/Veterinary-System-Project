import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import NavBar from './LabsNavBar';
import "../styles/abhiseka_css/labs.css";
// import lab from "../../../Backend/models/lab";


export default function Labs() {
  const [lab, setLabs] = useState([]);
 // const [SearchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    function getLabs() {
   
      axois.get("/lab/labs")
        .then((res) => {
          console.log(res.data.success);
          setLabs(res.data.existingLabs);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getLabs();
  }, []);
  
  const [serQuary,setSerQuary]=useState("");

  function searchLabs(event){
        
        setSerQuary(event.target.value);

  }

  //page refresh function

  function refreshPage() {
    window.location.reload(true);
  }

  const deleteData = (labs) => {
    var result = window.confirm("Do you wont to Delete?",refreshPage());
    console.log(result);
    if (result == true) {
      axois
        .delete(`lab/delete/${labs._id}`)
        .then((res) => {}).getlabs()
        .catch((labs) => {
          alert(labs);
        });
    } else {
        labs.preventDefault();
    }
  };

  return (
    <div className="main-container">

        <NavBar />
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                        ALL LABORATORIES
                    </h3>
                </div>
                <div className="order-section-one-right">
                    <input onChange={searchLabs} type="search" placeholder="Search" className="search-box" />
                </div>
            </div>
     
            <div className="order-section-two-container">     
                <table Class = "table">
                    <thead id="app-table">

                        <tr id="labhead">

                            <th className="order-table-header-col-1" scope="col">#</th>
                            <th className="order-table-header-col-1" scope="col">Lab Type</th>
                            <th className="order-table-header-col-1" scope="col">Lab Assistant</th>
                            <th className="order-table-header-col-1" scope="col">Actions</th>
                         
              
                        </tr>

                    </thead>

                    <tbody id="labbody">
                    {lab.filter(labs => 

                      
                      labs.labType.toLowerCase().includes(serQuary) ||
                      labs.assignedLabAssistant.toLowerCase().includes(serQuary)
                     

                      ).map((labs, index) =>(
                        <tr className="order-table-row" key = {labs._id}>

                            <th className="order-table-col-1" scope="row">{index+1}</th>
                         
                            <td className="order-table-col-1">{labs.labType}</td>
                            <td className="order-table-col-1">{labs.assignedLabAssistant}</td>
                            
            
                            <td id="action-button">
                              <a href={"./EditLab/"+labs._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(labs)}}>
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
