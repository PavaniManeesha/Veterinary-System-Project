import React, { useState } from "react";
import axios from "axios";
import NavBar from "./MedicineNav";

export default function Buyer_Request() {
  // Getting input values
  const [medicineid, setmedicineid] = useState("");
  const [medicinename, setmedicinename] = useState("");
  const [quantity, setquantity] = useState("");
  const status = "null";

  //Creating new Payment
  function sendData(s) {
    s.preventDefault();

    //Creating object
    const newRequest = {
      medicineid,
      medicinename,
      quantity,
      status,
    };

    //passing data to the DB
    axios
      .post("http://localhost:8000/requests/request/save", newRequest)
      .then(() => {
        alert("Request send successful");
        console.log(newRequest);
      })
      .catch((err) => {
        alert(" insert is unsuccessful");
        console.log(err);
      });
  }

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              Buyer Requests
            </h3>
          </div>
        </div>

        <div className="container" id="search">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                  <div className="container">
                    <form onSubmit={sendData}>
                      <div className="controls">
                        <div className="row">

                            <div className="form-group">
                              <label htmlFor="name">Medicine ID</label>
                              <br />
                              <input
                                type="number"
                                id="name"
                                name="name"
                                class="form-control"
                                onChange={(event) => {
                                  setmedicineid(event.target.value);
                                }}
                                required
                              /><br/>
                            </div>
                          

                            <div className="form-group">
                              <label htmlFor="nic">Medicine Name</label>
                              <br />
                              <input
                                className="form-input"
                                type="text"
                                id="nic"
                                name="nic"
                                class="form-control"
                                onChange={(event) => {
                                  setmedicinename(event.target.value);
                                }}
                                required
                              />
                            <br/>
                          </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                              <label htmlFor="category">Quantity</label>
                              <br />
                              <input
                                type="text"
                                id="category"
                                name="category"
                                class="form-control"
                                onChange={(event) => {
                                  setquantity(event.target.value);
                                }}
                                required
                              />
                            </div>
                            <br/>

                          {/* <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="contactNo">NULL</label>
                              <input
                                type="text"
                                id="contactNo"
                                name="contactNo"
                                class="form-control"
                                onChange={(event) => {
                                  setquantity(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div> */}
                        </div><br/>

                        </div>
                        <div class="col-md-12">
                                <input type="submit" id="submit-btn" className="btn btn-success btn-send  pt-2 btn-block" value="Send Request"></input>
              
              <a href="/medicineCode">
                
              <button type="button" className="allmedibtn" id="button-34">All Medicines</button>
              
              
              
            </a>
            

            {/* <div class="col-md-12">
            <input type="submit" id="submit-btn" className="btn btn-success btn-send  pt-2 btn-block" value="All Medicines"></input>
            </div> */}
                              </div>
                            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    )
}
