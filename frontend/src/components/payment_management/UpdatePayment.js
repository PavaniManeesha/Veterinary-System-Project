import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
//import PaymentNavbar from '../components/PaymentNavbar';
import "../styles/common.css";
import "../styles/lakindu_css/UpdatePayment.css";

import { useReactToPrint } from 'react-to-print';


import Background from '../styles/imageSources/Background.jpg';
import { color } from '@mui/system';

export default function UpdatePayment() {

  //Getting DB values
  const [payment, setPayment] = useState([]);

  //Print Handle
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:'Payment-Data',
  });

  useEffect(()=>{
    function getPayment(){
      axios.get("http://localhost:8000/payment/get/" + localStorage.getItem('ID')).then((res)=>{
        setPayment(res.data);
      }).catch((error)=>{
        alert("Error: Payment Details not Found");
        console.log(error);
      })
      }getPayment();
  }, []);

  //Getting update values
  const [owner_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setNumber] = useState("");
  const [pet_name, setPet] = useState("");
  const appointment_number = "01";
  const appointment_date = "2022/10/10";

  //Creating update Payment
  function sendData(s){
    s.preventDefault();

    //Validation
    if (owner_name.trim().length === 0) {
      alert("Owner Name Cannot be Empty");
    }else if(contact_number.trim().length === 0){
      alert("Contact Number Cannot be Empty");
    }else if(email.trim().length === 0){
      alert("Email Cannot be Empty");
    }else if(pet_name.trim().length === 0){
      alert("Pet Name Cannot be Empty");
    }else if(contact_number.trim().length != 10){
      alert("Mobile Number Must be 10 Numbers");
    }else{

    //Creating object
    const updatePayment ={
      owner_name,
      email,
      contact_number,
      pet_name,
      appointment_number,
      appointment_date
    }
    
    //passing data to the DB
    axios.patch("http://localhost:8000/payment/update/" + payment._id, updatePayment).then(()=>{
      alert("Payment update successful");
      document.location.reload();
    }).catch((err)=>{
      alert("Error: Payment update unsuccessful");
      console.log(err);
    })

  }
  }

  return (
    <body className= "main-container" style={{backgroundImage:`url(${Background})`,backgroundRepeat:"no-repeat"}}>
      {/* <PaymentNavbar/> */}

      <div className="body-container">
        <div className="updateComponent">
          <form>
          
            <div className="container_1">
              <div className="content_1">
                <label for="PID">
                  Payment ID
                </label><br/>
                <input type="text" id="PID" name="PID" value={payment._id} readOnly/>
              </div>

              <div className="content_2">
                <label for="PayDate" className="mobileSize">
                  Payment Date
                </label><br/>
                <input type="text" id="payDate" name="PayDate" value={payment.createdAt} readOnly/>
            </div></div>
                    
              <div className="content_1">
                <label for="Name" className="mobileSize">
                  Name of the owner
                </label><br/>
                <input type="text" id="Name" name="Name" placeholder={payment.owner_name} onChange={(event)=>{
                  setName(event.target.value);
                }} required/>
              </div><br/><br/>

            <div className="container_1">
              <div className="content_1">
                <label for="cNum">
                  Contact Number
                </label><br/>
                <input type="text" id="cnum" name="cNum" placeholder={payment.contact_number} onChange={(event)=>{
                  setNumber(event.target.value);
                }} required pattern="[0][0-9]{9}"/>
                </div>

                <input hidden
                   required/>
              
              <div className="content_2">
                <label for="Email" className="mobileSize">
                  Email Address
                </label><br/>
                <input type="text" id="Email" name="Email" placeholder={payment.email} onChange={(event)=>{
                  setEmail(event.target.value);
                }} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
            </div></div>

              <div className="content_1">
                <label for="PetName" className="mobileSize">
                  Name of the pet
                </label><br/>
                <input type="text" id="PetName" name="PetName" placeholder={payment.pet_name} onChange={(event)=>{
                  setPet(event.target.value);
                }} required/>
              </div><br/><br/>

            <div className="container_1">
              <div className="content_1">
                <label for="ApNum">
                  Appointment number
                </label><br/>
                <input type="number" id="ApNum" name="ApNum" value={payment.appointment_number} readOnly/>
              </div>

              <div className="content_2">
                <label for="ApDate" className="mobileSize">
                  Appointment Date
                </label><br/>
                <input type="text" id="ApDate" name="ApDate" value={payment.appointment_date} readOnly/>
            </div></div>

          

            <div className="container_2">
              <div className="content_3">
                <input className="updateBtn" type="submit" value="Update Info" onClick={sendData}></input>
              </div>
              <div className="content_4">
                <input className="generateBtn" type="submit" value="Generate Report" onClick={handlePrint}></input>
            </div></div>
          </form>
        </div>
        </div>

        <div hidden>
          <div ref={componentRef}>
            <div className="print-out">
            <div className='print-out-header'>
              <h2>PAYMENT DETAILS</h2>
            </div><br/>

            <div className="print-container">
                <label for="print-PayDate" className="mobileSize">
                  Payment Date
                </label><br/>
                <input type="text" id="print-payDate" name="PayDate" value={payment.createdAt.split('T')[0]}/>
            </div><br/>

            <div className="print-container">
                <label for="print-Name" className="mobileSize">
                  Name of the owner
                </label><br/>
                <input type="text" id="print-Name" name="Name" placeholder={payment.owner_name}/>
            </div><br/>

            <div className="print-container">
              <label for="print-cNum">
                Contact Number
              </label><br/>
              <input type="text" id="cnum" name="print-cNum" placeholder={payment.contact_number}/>
            </div><br/>

            <div className="print-container">
                <label for="print-Email" className="mobileSize">
                  Email Address
                </label><br/>
                <input type="text" id="printEmail" name="Email" placeholder={payment.email}/>
            </div><br/>

            <div className="print-container">
              <label for="print-PetName" className="mobileSize">
                Name of the pet
              </label><br/>
              <input type="text" id="print-PetName" name="PetName" placeholder={payment.pet_name}/>
            </div><br/>

            <div className="print-container">
              <label for="print-ApNum">
                Appointment number
              </label><br/>
              <input type="number" id="print-ApNum" name="ApNum" value={payment.appointment_number}/>
            </div><br/>

            <div className="print-container">
                <label for="print-ApDate" className="mobileSize">
                  Appointment Date
                </label><br/>
                <input type="text" id="print-ApDate" name="ApDate" value={payment.appointment_date.split('T')[0]}/>
            </div>
          </div>
          </div>
        </div>
    </body>
  )
}