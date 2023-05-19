import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link, useParams } from "react-router-dom";
 import "../styles/header.css";
 import "../styles/common.css";
 import "../styles/retrieveTable.css";
 //import "../css/style.css";
 //cd ..
 import NavBar from './StaffNav';


export default function NursView() {
  const [nurse, setnurse] = useState([]);

  
  function refreshpage() {
      window.location.reload(false);
  }   
    
  useEffect(() => {
    function getnurse() {
   
      axois.get("http://localhost:8000/nurses/nurse/")
        .then((res) => {
          console.log(res.data);
          setnurse(res.data.existingPosts);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getnurse();
  }, []);
  //
  const deleteData = (e) => {
    var result = window.confirm("Do you want to Delete?",refreshpage());

    if (result == true) {
      axois
        .delete(`http://localhost:8000/nurses/nurse/delete/${e._id}`)
        .then((res) => {})
        .catch((e) => {
          alert(e);
        });
    } else {
      e.preventDefault();
    }
  };

  const [serQuary,setSerQuary]=useState("");

  function searchNurse(event){
        setSerQuary(event.target.value);
  }
  
  
  return (
    <div className="main-container">

         <NavBar /> 
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                        ALL NURSE DETAILS
                    </h3>
                </div>
                <div className="order-section-one-right">
                    <input type="Search Name" placeholder="Search" className="search-box" onChange={searchNurse}/>
                </div>
            </div>
     
            <div className="order-section-two-container">     
                <table Class = "table">
                    <thead id="app-table">

                        <tr >
                            <th className="order-table-header-col-1" scope="col">#</th>
                            <th className="order-table-header-col-1" scope="col">NURSE NAME</th>
                            <th className="order-table-header-col-1" scope="col">NURSE ID</th>
                            <th className="order-table-header-col-1" scope="col">AGE</th>
                            <th className="order-table-header-col-1" scope="col">WORK EXPERIENCE</th>
                            <th className="order-table-header-col-1" scope="col">GENDER</th>
                            <th className="order-table-header-col-1" scope="col">SALARY</th>
                            <th className="order-table-header-col-1" scope="col">-----------ACTION--------</th>
                           

                        </tr>

                    </thead>

                    <tbody>
                    {nurse && nurse.filter(nurse =>
                      nurse.nurseName.includes(serQuary)
                    ).map((nurse, index) =>(
                        <tr className="order-table-row" key = {nurse._id}>

                            <th className="order-table-col-1" scope="row">{index+1}</th>                          
                            <td className="order-table-col-1">{nurse.nurseName}</td>
                            <td className="order-table-col-1">{nurse.nId}</td>
                            <td className="order-table-col-1">{nurse.nAge}</td>
                            <td className="order-table-col-1">{nurse.workEx}</td>
                            <td className="order-table-col-1">{nurse.gender}</td>
                            <td className="order-table-col-1">{nurse.nSalary}</td>
                            
                            <td id="action-button">
                              <a href={"/UpdateNurse/"+ nurse._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(nurse)}}>
                                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </button>
                              </a>
                              
                              {/* <a class="col-12">
           <button type="submit" class="btn btn-primary" id="btn9" onClick={this.onSubmit}>Add Supplier</button>
       
         </a> */}
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {/* <a className="b11" href="/AddNurse"><button type="button" class="btn btn-outline-success"> ADD NURSE</button></a> */}
        </div>
    </div>

    );
    
 }