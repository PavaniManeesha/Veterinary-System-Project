import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "./MedicineNav";

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [medicineid, setmedicineid] = useState("");
  const [medicinename, setmedicinename] = useState("");
  const [category, setcategory] = useState();
  const [quantity, setquantity] = useState("");
  const [manufacture, setmanufacture] = useState("");
  const [expire, setexpire] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/pharamarcy/medicine/` + id)
    .then((getData) => {
      setmedicineid(getData.data.medicine.medicineid);
      setmedicinename(getData.data.medicine.medicinename);
      setcategory(getData.data.medicine.category);
      setquantity(getData.data.medicine.quantity);
      setmanufacture(getData.data.medicine.manufacture);
      setexpire(getData.data.medicine.expire);
      // console.log(getData.data.medicine.supplier_name);
    });
  }, []);

  const sendDataToAPI = () => {
    const data = {
      medicineid,
      medicinename,
      category,
      quantity,
      manufacture,
      expire,
    };
    axios
      .put(`http://localhost:8000/pharamarcy/medicine/update/${id}`, data)
      .then((res) => {
        // alert("Update Successfull");
        navigate(-1);
      })
      .catch((err) => {
        alert("Update Unsuccessfull");
      });
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              Update Medicine
            </h3>
          </div>
        </div>

        <div className="container" id="search">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                  <div className="container">
                    <form onSubmit={sendDataToAPI}>
                      <div className="controls">
                      <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="category">Medicine ID</label>
                              <br />
                              <input
                                type="number"
                                value={medicineid}
                                id="medicineid"
                                name="medicineid"
                                class="form-control"
                                onChange={(event) => {
                                  setmedicineid(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div><br/>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="contactNo">Medicine Name</label>
                              <input
                                type="text"
                                value={medicinename}
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
                                value={category}
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
                              <label htmlFor="contactNo">Quantity</label>
                              <input
                                type="number"
                                value={quantity}
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

                        
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="petType">Manufacture Date</label>
                              <br />
                              <input
                                type="date"
                                value={manufacture}
                                id="manufacture"
                                name="manufacture"
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
                              <label htmlFor="date">Expire Date</label>
                              <br />
                              <input
                                type="date"
                                value={expire}
                                id="expire"
                                name="expire"
                                class="form-control"
                                onChange={(event) => {
                                  setexpire(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        </div>
                        <div class="col-md-12">
                                <input type="submit" onClick={sendDataToAPI} id="submit-btn" className="btn btn-success btn-send  pt-2 btn-block" value="Update Medicine"></input>
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
