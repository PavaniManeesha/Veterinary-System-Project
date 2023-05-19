import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';
import "../styles/vathila_css/medRep.css";
import DashInv from "./images/DashInv.png";

export default function Staffreport({search,setSearch}){
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [staffde, setstaffde] = useState([
    {
      product_name:"",
      item_no:"",
      category:"",
      quantity:"",
      Manufacture_date:"",
      expiry_date:""
    },
  ]);

  useEffect(() => {
    function getdetails() {
      axios
        .get("http://localhost:8000/medicine/medicineIn")
        .then((res) => {
          console.log(res);
          setstaffde(res.data.existingPosts);
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
        
        
        <td className="table-clo1">{staffde.product_name}</td>
        <td className="table-clo1">{staffde.item_no}</td>
        <td className="table-clo1">{staffde.category}</td>
        <td className="table-clo1">{staffde.quantity}</td>
        <td className="table-clo1">{staffde.Manufacture_date.split("T")[0]}</td>
        <td className="table-clo1">{staffde.expiry_date.split("T")[0]}</td>
      </tr>
    );
  };

  return (
      
        <div className="table-clo1">
      
        
      <input placeholder="Enter the item no" className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
      <div ref={componentRef}>
        <div className="med-report-print">
        <h2 className="table-clo12">Annual medicine Report</h2>
        <br></br>
        <div>
          <img className='DashInv' src={DashInv} alt="Logo01"/>
          </div>
        <br>
        </br>


        <table className="med-view-report">
            <thead>
              <tr>
                <th className="medicine-header-table-raw">product_name</th>
                <th className="medicine-header-table-raw">item_no</th>
                <th className="medicine-header-table-raw">category</th>
                <th className="medicine-header-table-raw">quantity</th>
                <th className="medicine-header-table-raw">Manufacture_date</th>
                <th className="medicine-header-table-raw">expiry_date</th>
              </tr>
            </thead>
            <tbody>{staffde ?.reverse()
                .filter((filteredStudents) =>
                  filteredStudents.item_no
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