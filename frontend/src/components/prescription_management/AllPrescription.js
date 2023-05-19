import React, { useState, useEffect } from "react";
import axois from "axios";
import NavBar from "./PrescriptionNavBar";
import { useParams} from "react-router-dom";
import "../styles/navBar.css";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/retrieveTable.css";
import "../styles/anushka_css/stylePrescription.css"


export default function Doc() {
    const [Prescription, setPrescription] = useState([]);

    const {petid} = useParams();

    useEffect(() => {
        function getAppoinment() {
       
          axois.get(`http://localhost:8000/prescriptions/prescription/get/${petid}`)
            .then((res) => {
              console.log(res.data);
              setPrescription(res.data.prescription);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getAppoinment();
      }, []);
    
      //delete the somthin page is reffesh
        function refreshPage(){
          window.location.reload(false);
        }
        
    
      //delete data
      const deleteData = (e) => {
        var result = window.confirm("Do you wont to Delete?",refreshPage());
    
        if (result == true) {
          axois
            .delete(`http://localhost:8000/prescriptions/prescription/delete/${e._id}`)
            .then((res) => {})
            .catch((e) => {
              alert(e);
            });
        } else {
          e.preventDefault();
        }
      };

  
  return (
    <div className="main-container">

        <NavBar />
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                        Prescription
                    </h3>
                </div>
                
            </div>

            <div className="order-section-two-container">   
             
                <table Class = "table">
                    <thead id="app-table">

                        <tr >

                    
                            <th className="order-table-header-col-1" scope="col">Number</th>      
                            <th className="order-table-header-col-1" scope="col">Date</th>                            
                            <th className="order-table-header-col-1" scope="col">Advice</th>
                            <th className="order-table-header-col-1" scope="col">Medicine</th>
                            <th className="order-table-header-col-1" scope="col">Action </th>
                            
                        </tr>

                    </thead>

                    <tbody>
                    {Prescription.map((e, index) =>(
                       
                            <tr className="order-table-row">

                           <th className="order-table-col-1" scope="row">{index+1}</th>
                           
                           
                            
                            <td className="order-table-col-1">{e.date.split('T')[0]}</td>
                            <td className="order-table-col-1">{e.advicegiven}</td>
                            <td className="order-table-col-1">{e.medicine}</td>
                       
                            <td id="action-button">
                              <a href={"/DocViewPrescription/"+petid+"/"+e._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(e)}}>
                                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </button>
                              </a>
                              &nbsp;
                              <a href={"/GivePrescrption/"+petid+"/"+e._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Print
                                </button>
                              </a>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
                
            </div>
            <div>
                <button className="btn btn-success"><a href={"/Newprescription/"+petid} style={{textDecoration:'none',color:'white'}}>Add New prescription</a></button>
                </div>
        </div>
    </div>

    );
}