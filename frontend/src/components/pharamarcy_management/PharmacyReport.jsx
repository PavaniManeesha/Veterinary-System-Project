import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';
// import "./styles/medRep.css";
// import DashInv from "./images/DashInv.png";

export default function Staffreport({search,setSearch}){
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [staffde, setstaffde] = useState([
    {
        medicineid:"",
        medicinename:"",
        category:"",
        quantity:"",
        manufacture:"",
        expire:""
     
    },
  ]);

  useEffect(() => {
    function getdetails() {
      axios
        .get("http://localhost:8000/pharamarcy/medicine/")
        .then((res) => {
          console.log(res);
          setstaffde(res.data.existingMedicines);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getdetails();
  },[]);

  const renderClass = (staffde, index) => {
    return (
      <tr key={index}>
        
        
        <td className="table-clo1">{staffde.medicineid}</td>
        <td className="table-clo1">{staffde.medicinename}</td>
        <td className="table-clo1">{staffde.category}</td>
        <td className="table-clo1">{staffde.quantity}</td>
        <td className="table-clo1">{staffde.manufacture}</td>
        <td className="table-clo1">{staffde.expire}</td>
       
      </tr>
    );
  };

  return (
      
        <div className="table-clo1">
      
        
      <input placeholder="Enter the medicine name" className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
      <div ref={componentRef}>
        <div className="med-report-print">
        <h2 className="table-clo12">Monthly medicine Report</h2>
        <br></br>
        {/* <div>
          <img className='DashInv' src={DashInv} alt="Logo01"/>
          </div> */}
        <br>
        </br>


        <table className="med-view-report">
            <thead>
              <tr>
                <th className="medicine-header-table-raw">MEDICINE_ID</th>
                <th className="medicine-header-table-raw">MEDICINE_NAME</th>
                <th className="medicine-header-table-raw">CATEGORY</th>
                <th className="medicine-header-table-raw">QUANTITY</th>
                <th className="medicine-header-table-raw">MANUFACTURE_DATE</th>
                <th className="medicine-header-table-raw">EXPIRY_DATE</th>

                
              </tr>
            </thead>
            <tbody>{staffde ?.reverse()
                .filter((filteredStudents) =>
                  filteredStudents.medicinename
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map(renderClass)}</tbody>
          </table>
          </div>
          </div>
          <button className="reportbtn" onClick={handlePrint}>Download PDF</button>
        
        
    
    </div>
  );
};