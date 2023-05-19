import React, { useState } from "react";
import axios from "axios";
import NavBar from "./MedicineNav";
import "../styles/common.css";
import "../styles/yasas_css/form.css";

export default function Add_Medicine() {
  // Getting input values
  const [medicineid, setmedicineid] = useState("");
  const [medicinename, setmedicinename] = useState("");
  const [category, setcategory] = useState("");
  const [quantity, setquantity] = useState("");
  const [manufacture, setmanufacture] = useState("");
  const [expire, setexpire] = useState("");

  //Creating new Payment
  function sendData(s) {
    s.preventDefault();

    //Creating object
    const newPrescription = {
      medicineid,
      medicinename,
      category,
      quantity,
      manufacture,
      expire,
    };

    //passing data to the DB
    axios
      .post("http://localhost:8000/pharamarcy/medicine/save", newPrescription)
      .then(() => {
        alert("Medicine add successful");
        console.log(newPrescription);
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
              Add Medicines
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
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="medicineid">Medicine ID</label>
                              <br />
                              <input
                                type="number"
                                id="medicineid"
                                name="medicineid"
                                class="form-control"
                                onChange={(event) => {
                                  setmedicineid(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="medicinename">Medicine Name</label>
                              <br />
                              <input
                                className="form-input"
                                type="text"
                                id="medicinename"
                                name="medicinename"
                                class="form-control"
                                onChange={(event) => {
                                  setmedicinename(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div><br/>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="category">Category</label>
                              <br />
                              <input
                                type="text"
                                id="category"
                                name="category"
                                class="form-control"
                                onChange={(event) => {
                                  setcategory(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div><br/>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="quantity">Quantity</label>
                              <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                class="form-control"
                                onChange={(event) => {
                                  setquantity(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div><br/>

                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="manudate">Manufacture Date</label>
                              <br />
                              <input
                                type="date"
                                id="manudate"
                                name="manudate"
                                class="form-control"
                                onChange={(event) => {
                                  setmanufacture(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div><br/>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="expdate">Expire Date</label>
                              <br />
                              <input
                                type="date"
                                id="expdate"
                                name="expdate"
                                class="form-control"
                                onChange={(event) => {
                                  setexpire(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12">
                                <input type="submit" id="submit-btn" className="btn btn-success btn-send  pt-2 btn-block" value="ADD MEDICINE"></input>
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