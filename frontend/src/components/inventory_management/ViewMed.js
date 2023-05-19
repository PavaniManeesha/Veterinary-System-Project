import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";

import NavBar from "./MedNav";

export default function Medicine() {
  const [Medicine, setmedicine] = useState([]);

  function refreshpage() {
    window.location.reload(false);
  }

  useEffect(() => {
    function getMedicine() {
      axois
        .get("http://localhost:8000/medicine/medicineIn")
        .then((res) => {
          console.log(res.data);
          setmedicine(res.data.existingPosts);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getMedicine();
  }, []);
  //
  const deleteData = (e) => {
    var result = window.confirm("Do you wont to Delete?", refreshpage());

    if (result == true) {
      axois
        .delete(`http://localhost:8000/medicine/medicineIn/delete/${e._id}`)
        .then((res) => {})
        .catch((e) => {
          alert(e);
        });
    } else {
      e.preventDefault();
    }
  };

  const [serQuary, setSerQuary] = useState("");

  function searchmedicines(event) {
    setSerQuary(event.target.value);
  }

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
            STOCK OF INVENTORY
            </h3>
          </div>
          <div className="order-section-one-right">
            <input
              onChange={searchmedicines}
              type="search"
              placeholder="Search by item no"
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
                  PRODUCT NAME
                </th>
                <th className="order-table-header-col-1" scope="col">
                  ITEM NO
                </th>
                <th className="order-table-header-col-1" scope="col">
                  CATEGORY
                </th>
                <th className="order-table-header-col-1" scope="col">
                  QUANTITY
                </th>
                <th className="order-table-header-col-1" scope="col">
                  MANUFACTURE DATE
                </th>
                <th className="order-table-header-col-1" scope="col">
                  EXPIRY DATE
                </th>
                <th className="order-table-header-col-1" scope="col">
                  ACTION
                </th>
              </tr>
            </thead>

            <tbody>
              {Medicine.filter(
                (Medicine) =>
                  Medicine.item_no.includes(serQuary) ||
                  Medicine.item_no.toLowerCase().includes(serQuary),                 
              ).map((Medicine, index) => (
                <tr className="order-table-row" key={Medicine._id}>
                  <th className="order-table-col-1" scope="row">
                    {index + 1}
                  </th>
                  <td className="order-table-col-1">{Medicine.product_name}</td>
                  <td className="order-table-col-1">{Medicine.item_no}</td>
                  <td className="order-table-col-1">{Medicine.category}</td>
                  <td className="order-table-col-1">{Medicine.quantity}</td>
                  <td className="order-table-col-1">
                    {Medicine.Manufacture_date.split("T")[0]}
                  </td>
                  <td className="order-table-col-1">
                    {Medicine.expiry_date.split("T")[0]}
                  </td>

                  <td id="action-button">
                    <a
                      href={"/MedEdit/" + Medicine._id}
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
                          deleteData(Medicine);
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
        <br />
        <a href="/MedReport">
          <button type="button" className="btn btn-outline-success">
            {" "}
            Generate annual report
          </button>
        </a>
      </div>
    </div>
  );
}
