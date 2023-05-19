import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import NavBar from "./MedicineNav";

export default function Medicine_Details() {
  const [prescription, setprescription] = useState([]);
  // const [SearchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    function getAppoinments() {
      axois
        .get("http://localhost:8000/prescriptions/prescription/")
        .then((res) => {
          console.log(res.data.success);
          setprescription(res.data.existingPosts);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAppoinments();
  }, []);

  const [serQuary, setSerQuary] = useState("");

  function searchAppointment(event) {
    setSerQuary(event.target.value);
  }

  //page refresh function

  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              View Doctor give Prescription
            </h3>
          </div>
          <div className="order-section-one-right">
            <input
              onChange={searchAppointment}
              type="search"
              placeholder="Search"
              className="search-box"
            />
          </div>
        </div>

        <div className="order-section-two-container">
          <table Class="table">
            <thead id="app-table">
              <tr>
                <th className="order-table-header-col-1" scope="col">
                  #
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Reference Number
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Medine names
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {prescription
                .filter(
                  (prescription) =>
                    prescription._id.includes(serQuary) ||
                    prescription.medicine.toLowerCase().includes(serQuary) ||
                    prescription.medicine.includes(serQuary)
                )
                .map((prescription, index) => (
                  <tr className="order-table-row" key={prescription._id}>
                    <th className="order-table-col-1" scope="row">
                      {index + 1}
                    </th>

                    <td className="order-table-col-1">{prescription._id}</td>
                    <td className="order-table-col-1">
                      {prescription.medicine}
                    </td>
                    <td className="order-table-col-1">
                      {prescription.date.split("T")[0]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
