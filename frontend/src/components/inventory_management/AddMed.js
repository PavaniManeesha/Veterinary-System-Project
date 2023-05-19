import React from "react";
import axios from "axios";
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
import "../styles/vathila_css/inventory.css";
import NavBar from "./MedNav";
// import { Link } from "react-router-dom";

export default class AddMed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      item_no: "",
      category: "",
      quantity: "",
      Manufacture_date: "",
      expiry_date: "",
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      product_name,
      item_no,
      category,
      quantity,
      Manufacture_date,
      expiry_date,
    } = this.state;

    if (product_name.trim().length === 0) {
      alert("Product name cannot be empty !");
    } else if(item_no.trim().length===0){
      alert("Item no cannot be empty !");
    } else if(category.trim().length===0){
      alert("Category cannot be empty !");
    }
     else if(quantity.trim().length===0){
      alert("Quantity cannot be empty !");
    }
    else if(Manufacture_date.trim().length===0){
      alert("Manufacture date cannot be empty !");
    }
    else if(expiry_date.trim().length===0){
      alert("Expiry date cannot be empty");
    }else{

    const data = {
      product_name: product_name,
      item_no: item_no,
      category: category,
      quantity: quantity,
      Manufacture_date: Manufacture_date,
      expiry_date: expiry_date,
    };

    console.log(data);

    axios
      .post("http://localhost:8000/medicine/medicineIn/save", data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            product_name: "",
            item_no: "",
            category: "",
            quantity: "",
            Manufacture_date: "",
            expiry_date: "",
          });
          alert("Medicine successfully added");
        }
      });
  }};
  render() {
    return (
      <div className="main-container">
        <NavBar />

        <div className="dropdown"></div>
        <form className="inventory-form">
          <div>
            <h2 className="invH2">ADD MEDICINES</h2>
          </div>
          <div className="inventory-half">
            <div className="inventory-item">
              <label className="inventory-label" for="name">
                PRODUCT NAME
              </label>
              <input
                className="inventory-half-item"
                type="text"
                name="product_name"
                id="name"
                value={this.state.product_name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="inventory-item">
              <label className="inventory-label" for="email">
                ITEM NO
              </label>
              <input
                className="inventory-half-item"
                type="number"
                id="email"
                name="item_no"
                value={this.state.item_no}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="inventory-half">
            <div className="inventory-item">
              <label className="inventory-label" for="name">
                CATEGORY
              </label>
              <input
                className="inventory-half-item"
                type="phone"
                id="name"
                name="category"
                value={this.state.category}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="inventory-item">
              <label className="inventory-label" for="name">
                QUANTITY
              </label>
              <input
                className="inventory-half-item"
                type="number"
                id="name"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="inventory-half">
            <div className="inventory-item">
              <label className="inventory-label" for="name">
                MANUFACTURE DATE
              </label>
              <input
                className="inventory-half-item"
                type="date"
                id="name"
                name="Manufacture_date"
                value={this.state.Manufacture_date}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="inventory-item">
              <label className="inventory-label" for="name">
                EXPIRY DATE
              </label>
              <input
                className="inventory-half-item"
                type="date"
                id="name"
                name="expiry_date"
                value={this.state.expiry_date}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <a href="/">
            <button
              href="/"
              type="submit"
              className="btn btn-primary"
              id="invbtn"
              onClick={this.onSubmit}
            >
              Add medicines
            </button>
          </a>
        </form>
      </div>
    );
  }
}
