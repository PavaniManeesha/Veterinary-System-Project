import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import NavBar from "./MedicineNav";

export default function Medicine_Details() {
  const [medicines, setmedicines] = useState([]);
  // const [SearchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    function getMedicinedetails() {
      axois
        .get("http://localhost:8000/pharamarcy/medicine/")
        .then((res) => {
          console.log(res.data.success);
          setmedicines(res.data.existingMedicines);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getMedicinedetails();
  }, []);

  const [serQuary, setSerQuary] = useState("");

  function searchAppointment(event) {
    setSerQuary(event.target.value);
  }

  //page refresh function

  function refreshPage() {
    window.location.reload(true);
  }

  const deleteData = (medicine) => {
    var result = window.confirm("Do you wont to Delete?");
    console.log(result);
    if (result == true) {
      axois
        .delete(`http://localhost:8000/pharamarcy/medicine/delete/${medicine._id}`)
        .then((res) => {})
        .getMedicinedetails()
        .catch((medicine) => {
          alert(medicine);
        });
    } else {
      medicine.preventDefault();
    }
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              PHARMACY STOCK
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
                  Medicine ID
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Medicine Name
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Category
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Quantity
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Manufacture Date
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Expire Date
                </th>
                <th className="order-table-header-col-1" scope="col">
                  action
                </th>
              </tr>
            </thead>

            <tbody>
              {medicines.filter(
                  (medicine) =>
                    medicine._id.includes(serQuary) ||
                    medicine.medicinename.toLowerCase().includes(serQuary) ||
                    medicine.medicinename.includes(serQuary)
                )
                .map((medicine, index) => (
                  <tr className="order-table-row" key={medicine._id}>
                    <th className="order-table-col-1" scope="row">
                      {index + 1}
                    </th>
                    <td className="order-table-col-1">
                      <a
                        style={{ textDecoration: "none" }}
                      >
                        {medicine.medicineid}
                      </a>
                    </td>

                    <td className="order-table-col-1">
                      {medicine.medicinename}
                    </td>
                    <td className="order-table-col-1">{medicine.category}</td>
                    <td className="order-table-col-1">{medicine.quantity}</td>
                    <td className="order-table-col-1">
                      {medicine.manufacture.split("T")[0]}
                    </td>
                    <td className="order-table-col-1">
                      {medicine.expire.split("T")[0]}
                    </td>

                    <td id="action-button">
                      <a
                        href={"./Update_Medicine/" + medicine._id}
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          id="table-button"
                          className="btn btn-outline-primary btn-sm"
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </button>
                      </a>
                      &nbsp;
                      <a href="#">
                        <button
                          id="table-button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => {
                            deleteData(medicine);
                          }}
                        >
                          <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </button>
                      </a>
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
