import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import PaymentNavbar from '../components/PaymentNavbar';
import "../styles/common.css";
import Background from '../styles/imageSources/Background.jpg';
import PaymentDetails from './PaymentDetails';


export default function DisplayPaymets() {

  //Getting DB values
  const [payment, setPayment] = useState([]);

  useEffect(()=>{
    function getPayment(){
      axios.get("http://localhost:8000/payment/").then((res)=>{
        setPayment(res.data);
      }).catch((error)=>{
        alert("Error: Payment Details not Found");
        console.log(error);
      })
      }getPayment();
  }, []);

  //Search Using Payment Id
  const [serQuary,setSerQuary]=useState("");

  function searchPayment(event){
        setSerQuary(event.target.value);
  }

  return (

    <body className= "main-container" style={{backgroundImage:`url(${Background})`,backgroundRepeat:"no-repeat"}}>
      {/* <PaymentNavbar/> */}
      <div className="body-container">
      <div className="payment-search-container">
        <div>
          <input type="text" placeholder="Payment ID" id="search-payment-id" onChange={searchPayment}/>
        </div>
        <div>
          <input type="text" placeholder="Appointment NO" id="search-appointment-id" onChange={searchPayment}/>
        </div>
      </div>

      <div id="table-head-container">
        <th className="table-head">
          <b>Payment ID</b>
        </th>
        <th className="table-head">
          <b>Appointment number</b>
        </th>
        <th className="table-head">
          <b>Owner Name</b>
        </th>
        <th className="table-head">
          <b>Pay Date</b>
        </th>
        <th className="table-head">
          <b>View / Update</b>
        </th>
        <th className="table-head">
          <b>Delete</b>
        </th>
      </div>

      <div className="display-container">
        {payment && payment.filter(payment =>
          payment._id.includes(serQuary) ||
          payment.appointment_number.includes(serQuary)
        )
        .map((payment)=>(
            <PaymentDetails key={payment._id} payment={payment}/>
        ))}
      </div>
      </div>   
    </body>
  )
}
