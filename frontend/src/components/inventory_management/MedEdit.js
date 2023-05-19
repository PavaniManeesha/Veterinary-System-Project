import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/vathila_css/inventory.css";
import NavBar from "./MedNav";

export default function Update() {
  const navigate = useNavigate();
  const { posts, setposts } = useState();
  const { id } = useParams();
  const [product_name, setnamee] = useState("");
  const [item_no, setitem] = useState();
  const [category, setcatt] = useState("");
  const [quantity, setquantity] = useState("");
  const [Manufacture_date, setman] = useState("");
  const [expiry_date, setexp] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:8000/medicine/medicineIn/` + id).then(
      (getData, res) => {
        setnamee(getData.data.medicine.product_name);
        setitem(getData.data.medicine.item_no);
        setcatt(getData.data.medicine.category);
        setquantity(getData.data.medicine.quantity);
        setman(getData.data.medicine.Manufacture_date);
        setexp(getData.data.medicine.expiry_date);
        console.log(getData.data);
      }
    );
  }, []);

  const sendDataToAPI = () => {
    const data = {
      product_name,
      item_no,
      category,
      quantity,
      Manufacture_date,
      expiry_date,
    };
    Axios.put(`http://localhost:8000/medicine/medicineIn/update/${id}`, data)
      .then((res) => {
        alert("Update Successful");
        navigate(-1);
      })
      .catch((err) => {
        alert("Update Unsuccessful");
      });
  };

  return (
    //     <div>
    //     <div className="container-fluid">

    //   {/* <form className="d-flex">

    //     <input id="s1" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchQuery" onChange={this.handleSearchArea}/>

    //     <button type="button" class="btn btn-info">Search</button>

    //   </form> */}

    // </div>
    <div className="main-container">
      <NavBar />
      <div className="Mededitinv">
        <div className="dropdown">
          <form className="inventory-form">
            <div>
              <h2 className="invH2">UPDATE MEDICINE</h2>
            </div>
            <div className="inventory-half">
              <div className="inventory-item">
                <label className="inventory-label" for="name">PRODUCT NAME</label>
                <input className="inventory-half-item"
                  type="text"
                  name="product_name"
                  id="name"
                  value={product_name}
                  onChange={(e) => setnamee(e.target.value)}
                  required
                />
              </div>
              <div className="inventory-item">
                <label className="inventory-label" for="email">ITEM NO</label>
                <input className="inventory-half-item"
                  type="number"
                  id="email"
                  name="item_no"
                  value={item_no}
                  onChange={(e) => setitem(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="inventory-half">
              <div className="inventory-item">
                <label className="inventory-label" for="name">CATEGORY</label>
                <input className="inventory-half-item"
                  type="phone"
                  id="name"
                  name="category"
                  value={category}
                  onChange={(e) => setcatt(e.target.value)}
                  required
                />
              </div>

              <div className="inventory-item">
                <label className="inventory-label" for="name">QUANTITY</label>
                <input className="inventory-half-item"
                  type="number"
                  id="name"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setquantity(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="inventory-half">
              <div className="inventory-item">
                <label className="inventory-label" for="name">MANUFACTURE DATE</label>
                <input className="inventory-half-item"
                  type="date"
                  id="name"
                  name="Manufacture_date"
                  value={Manufacture_date.split("T")[0]}
                  onChange={(e) => setman(e.target.value)}
                  required
                />
              </div>
              <div className="inventory-item">
                <label className="inventory-label" for="name">EXPIRY DATE</label>
                <input className="inventory-half-item"
                  type="date"
                  id="name"
                  name="expiry_date"
                  value={expiry_date.split("T")[0]}
                  onChange={(e) => setexp(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              id="invbtn"
              onClick={sendDataToAPI}
            >
              Update
            </button>
          </form>
        </div>
      
    </div>
    </div>
  );
}
