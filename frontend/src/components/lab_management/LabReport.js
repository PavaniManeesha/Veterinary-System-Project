import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';
import "../styles/abhiseka_css/LabReport.css"
// import DashInv from "../images/DashInv.png";

export default function Staffreport({search,setSearch}){
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [staffde, setstaffde] = useState([
    {
        petName:"",
        petOwner:"",
        doctor:"",
        testType:"",
        lab:"",
        date:"",
        time:"",
        ownerContact:""
    },
  ]);

  useEffect(() => {
    function getdetails() {
      axios
        .get("http://localhost:8000/reservation/reservation")
        .then((res) => {
          console.log(res);
          setstaffde(res.data.existingReservation);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getdetails();
  },[]);

  const renderClass = (staffde, index) => {
    return (

      
      <tr key={index} id="reportbody">
        
        
        <td className="report-petname">{staffde.petName}</td>
        <td className="report-petowner">{staffde.petOwner}</td>
        <td className="report-doctor">{staffde.doctor}</td>
        <td className="report-testtype">{staffde.testType}</td>
        <td className="report-lab">{staffde.lab}</td>
        <td className="report-date">{staffde.date}</td>
        <td className="report-time">{staffde.time}</td>
        <td className="report-contact">{staffde.ownerContact}</td>
      </tr>
    );
  };

  return (
      <div className="table-clo1">
        
    {/* <div className="table-clo1">
      <div className="table-clo1">
      <div className="table-clo1">
      <div className="table-clo1 "> */}
      
      <div className="box">
      
      <input placeholder="Enter the pet name" className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div ref={componentRef}>
        <br></br>
        <br></br>
        <h2 className="reporthead">Laboratory Reservation Details Report</h2>
        <br></br>
        
        {/* <div>
          <img className='logo01' src={DashInv} alt="Logo01"/>
          </div> */}

          

        <br></br>
        <table className="Lreport">
            <thead className='lreporthd'>
              <tr>
                <th>Pet Name</th>
                <th>Owner</th>
                <th>Doctor</th>
                <th>Test</th>
                <th>Lab</th>
                <th>Date</th>
                <th>Time</th>
                <th>Contact No</th>
              
              </tr>
            </thead>
            <tbody id='repbody'>{staffde ?.reverse()
                .filter((filteredStudents) =>
                  filteredStudents.petName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map(renderClass)}
           
                </tbody>
          </table>

          <br></br>
        </div>
        <div className="table-clo1">
        <button className='dwnbtn' onClick={handlePrint}><i class="fa fa-download"></i> Download PDF</button>
        
        </div>
        </div>
        
    //     </div>
    //     </div>
    // </div>
    // </div>
  );
};