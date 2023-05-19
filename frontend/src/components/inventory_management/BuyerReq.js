import React, { useState, useEffect } from "react";
import axois from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import NavBar from "./MedNav";
import "../styles/vathila_css/buyerReq.css";

export default function Request() {
  const [requests, setrequests] = useState([]);
  const [id, setid] = useState("null");
  const [Iquantity, setIquantity] = useState("");
  const nav = useNavigate();
  // function refreshpage() {
  //   window.location.reload(true);
  // }

  useEffect(() => {
    axois
      .get("http://localhost:8000/requests/request")
      .then((res) => {
        // console.log(res.data.existingRequests);
        if (res.data.existingRequests.status !== null) {
          setrequests(res.data.existingRequests);
        }
        // setrequests(res.data.existingRequests);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    if (id !== "null") {
      axois
        .get(`http://localhost:8000/pharamarcy/medicine/${id}`)
        .then((res) => {
          // console.log(res.data.medicine.quantity);
          setIquantity(res.data.medicine.quantity);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [id]);

  const handleClicUpdate = (Rquantity, medid, _id) => {
    // console.log(quantity);
    console.log(id);
    setid(medid);
    if (Iquantity < Rquantity) {
      // alert("No Enough Quantity ");
    } else if (Iquantity >= Rquantity) {
      const currentquantity = Iquantity - Rquantity;
      const status = "approved";
      const data = { currentquantity };
      const data1 = { status };
      const data2 = { Rquantity };

      axois
        .put(`http://localhost:8000/pharamarcy/medicine/update/${id}`, data)
        .then((res) => {
          // alert("Buyer request completed");
          axois
            .put(`http://localhost:8000/inventory/medicines/value/${id}`,data2)
            .then((res) => {
              alert("updated")
              // axois
              //   .put(`http://localhost:8000/medicines/status/${id}`,data2)
              //   .then((res) => {
              //     alert("updated");
              //   }).catch((err)=>{
              //     console.log(err);
              //   })
              ///delete the request
              axois
                .put(`http://localhost:8000/requests/request/status/${_id}`, data1)
                .then((res) => {
                  window.location.reload();
                  alert("request rejected");
                  nav("/");
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClickdelete = (_id) => {
    const status = "reject";
    const data = { status };
    axois
      .put(`http://localhost:8000/requests/request/status/${_id}`, data)
      .then((res) => {
        alert("Delete");
        window.location.reload(true);
      });
  };
  return (
    <div className="main-container">
      <NavBar />
      {/* <div className="body-container clearfix"> */}
      <div className="card-wapper">
        {requests.map((data, index) => (
          <div key={index}>
            {data.status === "null" ? (
              <div id="card" className="card">
                <h2 className="course-name">MEDICINE ID : {data.medicineid}</h2>
                <div className="text-box-card">
                  <h3 className="course-name">
                    MEDICINE NAME : {data.medicinename}
                  </h3>
                  <h3 className="course-name">QUANTITY : {data.quantity}</h3>
                </div>
                <div className="card-button">
                  <div className="update-card-button">
                    <button
                      class="button-68"
                      // variant="outlined"
                      // color="success"
                      onClick={() =>
                        handleClicUpdate(
                          data.quantity,
                          data.medicineid,
                          data._id
                        )
                      }
                    >
                      APPROVE
                    </button>
                  </div>
                  <div>
                    <button
                      className="button-78"
                      // variant="outlined"
                      // color="error"
                      onClick={() => handleClickdelete(data._id)}
                    >
                      REJECT
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
