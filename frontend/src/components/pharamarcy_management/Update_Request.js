import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "./MedicineNav";

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [medicineid, setmid] = useState("");
  const [medicinename, setmname] = useState();
  const [quantity, setqt] = useState("");


  useEffect(() => {
    axios.get(`http://localhost:8000/requests/request/`+ id).then(
      (getData, res) => {
        setmid(getData.data.requests.medicineid);
        setmname(getData.data.requests.medicinename);
        setqt(getData.data.requests.quantity);
         console.log(getData.data);
      }
    );
  }, []);


  const sendDataToAPI = () => {
    const data = {
      medicineid,
      medicinename,
      quantity,
    };
    axios.put(`http://localhost:8000/requests/request/update/${id}`, data)
      .then((res) => {
        alert("Update Successful");
        navigate(-1);
      })
      .catch((err) => {
        alert("Update Unsuccessful");
      });
  };



  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              Update Request
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
                              <label htmlFor="medicineid">Medicine ID</label>
                              <br />
                              <input
                                type="text"
                                value={medicineid}
                                id="medicineid"
                                name="medicineid"
                                class="form-control"
                                onChange={(event) => {
                                  setmid(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div><br/>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="medicinename">Medicine Name</label>
                              <input
                                type="text"
                                value={medicinename}
                                id="medicinename"
                                name="medicinename"
                                class="form-control"
                                onChange={(event) => {
                                  setmname(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div><br/>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="quantity">Quantity</label>
                              <br />
                              <input
                                type="text"
                                value={quantity}
                                id="quantity"
                                name="quantity"
                                class="form-control"
                                onChange={(event) => {
                                  setqt(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div><br/>

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
