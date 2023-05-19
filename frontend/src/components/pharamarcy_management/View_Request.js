import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import NavBar from "./MedicineNav";

export default function View_Request() {
  const [requests, setrequests] = useState([]);
  // const [SearchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    function getRequest() {
      axois
        .get("http://localhost:8000/requests/request/")
        .then((res) => {
          console.log(res.data.success);
          setrequests(res.data.existingRequests);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getRequest();
  }, []);

  const [serQuary, setSerQuary] = useState("");

  function searchRequest(event) {
    setSerQuary(event.target.value);
  }

  //page refresh function

  function refreshPage() {
    window.location.reload(true);
  }

  const deleteData = (request) => {
    var result = window.confirm("Do you wont to Delete?");
    console.log(result);
    if (result == true) {
      axois
        .delete(`http://localhost:8000/request/delete/${request._id}`)
        .then((res) => {})
        .getRequest()
        .catch((request) => {
          alert(request);
        });
    } else {
      request.preventDefault();
    }
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              View Medicine Requests
            </h3>
          </div>
          <div className="order-section-one-right">
            <input
              onChange={searchRequest}
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
                  Quantity
                </th>
                <th className="order-table-header-col-1" scope="col">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {requests
                .filter(
                  (request) =>
                    request._id.includes(serQuary) ||
                    request.medicinename.toLowerCase().includes(serQuary) ||
                    request.medicinename.includes(serQuary)
                )
                .map((request, index) => (
                  // < key={request._id}>
                  <>
                    {request.status === "null" ? (
                      <tr className="order-table-row" key={request._id}>
                        <th className="order-table-col-1" scope="row">
                          {index + 1}
                        </th>
                        <td className="order-table-col-1">
                          <a style={{ textDecoration: "none" }}>
                            {request.medicineid}
                          </a>
                        </td>

                        <td className="order-table-col-1">
                          {request.medicinename}
                        </td>
                        <td className="order-table-col-1">
                          {request.quantity}
                        </td>
                        <td id="action-button">
                          <a
                            href={`/Update_Request/${request._id}`}
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
                                deleteData(request);
                              }}
                            >
                              <i className="fas fa-trash-alt"></i>&nbsp;Delete
                            </button>
                          </a>
                        </td>
                      </tr>
                    ) : null}
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
