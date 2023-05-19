import React, { useState } from 'react'
import axios from 'axios'
//import PaymentNavbar from '../components/PaymentNavbar';
import "../styles/lakindu_css/PaymentForm.css"
import "../styles/common.css";

//import Background from '../imageSources/Background.jpg';
//import calculation from '../imageSources/Calculation.jpg';

export default function DoPayment() {

  //Getting input values
  const [owner_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setNumber] = useState("");
  const [pet_name, setPet] = useState("");
  const [appointment_number, setAppointment] = useState("");
  const [appointment_date, setDate] = useState("");

  //Creating new Payment
  function sendData(s){
    s.preventDefault();

    //Creating object
    const newPayment ={
      owner_name,
      email,
      contact_number,
      pet_name,
      appointment_number,
      appointment_date
    }
    
    //passing data to the DB
    axios.post("http://localhost:8000/payment/create", newPayment).then(()=>{
      alert("Payment is successful");
      document.location.reload();
    }).catch((err)=>{
      alert("Error: Payment is unsuccessful");
      console.log(err);
    })
  }

  //Validation
  function CheckData(){

    if (owner_name.trim().length === 0) {
      alert("Owner Name Cannot be Empty");
    }else if(contact_number.trim().length === 0){
      alert("Contact Number Cannot be Empty");
    }else if(email.trim().length === 0){
      alert("Email Cannot be Empty");
    }else if(pet_name.trim().length === 0){
      alert("Pet Name Cannot be Empty");
    }else if(appointment_number.trim().length === 0){
      alert("Appointment Number Cannot be Empty");
    }else if(appointment_date.trim().length === 0){
      alert("Appointment Date Cannot be Empty");
    }else if(contact_number.trim().length != 10){
      alert("Mobile Number Must be 10 Numbers");
    }

  }

  return (
    <body className= "main-container" style={{backgroundImage:`url(${""})`,backgroundRepeat:"no-repeat"}}>
    {/* <PaymentNavbar/> */}

    <div className="body-container">
      <div className="payment-main-component">
        <div id="error"></div>
        <form onSubmit={sendData} id="payment-form-data">
            <div className="content_1">
              <label for="uname" className="payment-label">
                Name of the owner
              </label><br/>
              <input type="text" id="uname" name="uname" className="payment-input" onChange={(event)=>{
                setName(event.target.value);
              }} required/>
            </div><br/><br/>

          <div className="container_1">
            <div className="content_1">
              <label for="cnum" className="payment-label">
                Contact Number
              </label><br/>
              <input type="text" id="cnum" name="cnum" className="payment-input" onChange={(event)=>{
              setNumber(event.target.value);
              }} required pattern="[0][0-9]{9}"/>
            </div>

            <div className="content_2">
              <label for="email" className="payment-label">
                Email
              </label><br/>
              <input type="email" id="email" name="email" className="payment-input" onChange={(event)=>{
                setEmail(event.target.value);
              }} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
          </div></div>

            <div className="content_1">
              <label for="pname" className="payment-label">
                Name of the pet
              </label><br/>
              <input type="text" id="pname" name="pname" className="payment-input" onChange={(event)=>{
                setPet(event.target.value);
              }} required/>
            </div><br/><br/>

          <div className="container_1">
            <div className="content_1">
              <label for="anum" className="payment-label">
                Appoinment number
              </label><br/>
              <input type="number" id="anum" name="anum" className="payment-input" onChange={(event)=>{
                setAppointment(event.target.value);
              }} required/>
            </div>

            <div className="content_2">
              <label for="adate" className="payment-label">
                Appoinment date
              </label><br/>
              <input type="date" id="adate" name="adate" className="payment-input" onChange={(event)=>{
                setDate(event.target.value);
              }} required/>
          </div></div><br/>

          <button type="submit" className="addBtn" onClick={CheckData}>
            Add payment
          </button>
        </form>

        <div className="payment-main-component-sub">

          <p id="payment-header">
            <b>WELCOME TO PAYMENT UI</b>
          </p>
          
          <div className="payment-component-about">
            <div>
              {/* <img src={calculation} alt="calculation" /> */}
            </div>

            <div>
              <pre className="payment-fee">
                <b>About Billing Details</b>
              </pre>
            </div><br/>
            <div>
              <pre className="payment-fee">
                <b>Doctor Fee                                          Rs.2000</b>
              </pre>
              <pre className="payment-fee">
                <b>Service Fee                                         Rs.500</b>
              </pre><br/>
              <pre className="payment-fee">
                <b>Total Amount                                      Rs.2500</b>
              </pre>
            </div>
          </div>
        </div>
        </div>
      </div>
    </body>
  )
}