import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import NavBar from './MedicineNav';

export default function Medicine() {
  const [Medicine, setmedicine] = useState([]);

  useEffect(() => {
    function getMedicine() {
      axois
        .get("http://localhost:8000/medicine/medicineIn/")
        .then((res) => {
          console.log(res.data.existingPosts);
          setmedicine(res.data.existingPosts);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getMedicine();
  }, []);
  //

  const [serQuary, setSerQuary] = useState("");

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              ALL MEDICINES
            </h3>
          </div>
          <div className="order-section-one-right">
            {/* <input onChange={searchmedicines} type="search" placeholder="Search" className="search-box" /> */}
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
              </tr>
            </thead>

            <tbody>
              {Medicine.filter(
                (Medicine) =>
                  Medicine.item_no.includes(serQuary) ||
                  Medicine.item_no.toLowerCase().includes(serQuary)
              ).map((Medicine, index) => (
                <tr className="order-table-row" key={Medicine._id}>
                  <th className="order-table-col-1" scope="row">
                    {index + 1}
                  </th>
                  <td className="order-table-col-1">{Medicine.product_name}</td>
                  <td className="order-table-col-1">{Medicine.item_no}</td>
                  <td className="order-table-col-1">{Medicine.category}</td>

                  {/* <td id="action-button">
                              <a href={"/MedEdit/"+ Medicine._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(Medicine)}}>
                                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </button>
                              </a>
                            </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
