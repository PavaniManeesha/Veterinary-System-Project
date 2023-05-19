import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import PaymentNavbar from '../components/lakindu_css/PaymentNavbar';
import PaymentDetails from "../payment_management/PaymentDetails"
import "../styles/common.css";

//import Background from '../styles/imageSources/Background.jpg';

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

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
  console.log(date);

  //Search Using Payment Id
  const [serQuary,setSerQuary]=useState("");

  function searchPayment(event){
    setSerQuary(event.target.value);
  }

  return (

    <body className= "main-container" style={{backgroundImage:`url(${""})`,backgroundRepeat:"no-repeat"}}>
      {/* <PaymentNavbar/> */}
      <div className="body-container">

      <div className="order-section-one-right">
        <input onChange={searchPayment} type="search" placeholder="Search Date" className="date-search-box"/>
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
      </div>

      <div className="display-container">
        {payment && payment.filter(payment =>
          payment.createdAt.includes(serQuary)
        )
        .map((payment)=>(
          <PaymentDetails key={payment._id} payment={payment}/>
      ))}
      </div>
      </div>   
    </body>
  )
}