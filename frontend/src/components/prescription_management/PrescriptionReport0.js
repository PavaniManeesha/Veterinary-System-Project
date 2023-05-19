import React, { useState, useEffect, useRef } from "react";
import axois from "axios";
import { useReactToPrint } from 'react-to-print';
import NavBar from "./PrescriptionNavBar";

import { Link } from "react-router-dom";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/retrieveTable.css";


export default function Prescription() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:'prescription-data',
    onAfterPrint:()=>alert('Print Success')

  });
  const [Prescription, setPrescription] = useState([]);
 
 const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
  console.log(date);

  useEffect(() => {
    function getPrescription() {
   
      axois.get("http://localhost:8000/prescriptions/prescription/get/doc/"+window.localStorage.getItem('doctorID'))
        .then((res) => {
          console.log(res.data.success);
          setPrescription(res.data.prescription);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getPrescription();
  }, []);
  
  const [serQuary,setSerQuary]=useState("");

  function searchPrescription(event){
        
        setSerQuary(event.target.value);

  }
  return (
    <div className="main-container">
          <div ref={componentRef} style={{width:'100%',height:window.innerHeight}}>

        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "20px", marginRight: "5px" }}>
                        My Prescription
                    </h3>
                    
                </div>
                <div className="order-section-one-right">
                    <input onChange={searchPrescription} type="search" placeholder="Search" className="search-box" />
                </div>
            </div>
     
            <div className="order-section-two-container">     
                <table Class = "table">
                    <thead id="app-table">
               
                        <tr className="abc">   
                            <th className="order-table-header-col-1" scope="col">Number</th>
                            <th className="order-table-header-col-1" scope="col">Prescription ID</th>
                            <th className="order-table-header-col-1" scope="col">Pet ID</th>
                            <th className="order-table-header-col-1" scope="col">Date</th>

                        </tr>

                    </thead>

                    <tbody>
                    {Prescription&&Prescription.filter(prescription => 

                            prescription.date.includes(serQuary) 
                        
                     

                      ).map((prescription, index) =>(
                        <tr className="order-table-row" >
                            <th className="order-table-col-1" scope="row">{index+1}</th>
                           
                              <td className="order-table-col-1">{prescription._id}</td>
                            <td className="order-table-col-1">{prescription.petid}</td>
                            <td className="order-table-col-1">{prescription.date.split('T')[0]}</td>



                        </tr>
                    ))}
                    </tbody>

                </table>
          
            </div>
            <button onClick={handlePrint}>Print this out</button>
        </div>
         
       
        </div>
    </div>

    );
}