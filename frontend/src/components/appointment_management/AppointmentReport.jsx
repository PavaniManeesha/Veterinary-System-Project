import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';
import "../styles/supun_css/appointmentReport.css";

export default function VaccinationReport({search,setSearch}){
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  setSearch("Vaccination")

  const [appointmentReport, setstaffde] = useState([
    {
      name:"",
      contactNo:"",
      petName:"",     
      petType:"",
      date:"",
      reasonFrVisit:"",
      availableAppointmentSlot:"",
      doctorName:""
    },
  ]);

  useEffect(() => {
    function getdetails() {
      axios
        .get("http://localhost:8000/appointment/")
        .then((res) => {
          console.log(res);
          setstaffde(res.data.existingAppointments);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getdetails();
  },[]);

  const renderClass = (appointmentReport, index) => {
    return (
      <tr key={index}>
        
        
        <td className="app-clo1">{appointmentReport.name}</td>
        <td className="app-clo1">{appointmentReport.contactNo}</td>
        <td className="app-clo1">{appointmentReport.petName}</td>
        <td className="app-clo1">{appointmentReport.petType}</td>
        <td className="app-clo1">{appointmentReport.date.split('T')[0]}</td>
        <td className="app-clo1">{appointmentReport.reasonFrVisit}</td>
        <td className="app-clo1">{appointmentReport.availableAppointmentSlot}</td>
        <td className="app-clo1">{appointmentReport.doctorName}</td>
      </tr>
    );
  };

  return (
      <div className="table-clo1">
        <div className="table-clo1">
          <div className="table-clo1">
            <div className="table-clo1">
              <div className="table-clo1 ">
                
              {/* <input placeholder="Enter the e-mail address" className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/> */}
                <div ref={componentRef}>
                  <center>
                    <h2 className="table-clo12">Vaccination Report</h2>
                  </center>
                  <center>
                  <table className="Appointment-table">
                      <thead>
                        <tr>
                          <th className="medicine-header-table-raw">name</th>
                          <th className="medicine-header-table-raw">contactNo</th>
                          <th className="medicine-header-table-raw">petName</th>   
                          <th className="medicine-header-table-raw">petType</th>
                          <th className="medicine-header-table-raw">date</th>
                          <th className="medicine-header-table-raw">reasonFrVisit</th>
                          <th className="medicine-header-table-raw">AppointmentSlot</th>
                          <th className="medicine-header-table-raw"> doctorName</th>
                        </tr>
                      </thead>
                      <tbody>{appointmentReport ?.reverse()
                          .filter((filteredppointment) =>
                          filteredppointment.reasonFrVisit
                              .toLowerCase()
                              .includes(search.toLowerCase(""))
                          ).map(renderClass)}</tbody>
                    </table>
                  </center>
                </div>
              </div>
            </div>
          </div>
      </div>
      <button onClick={handlePrint}>Download PDF</button>
    </div>
  );
};