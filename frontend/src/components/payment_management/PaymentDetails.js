import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import "../styles/lakindu_css/PaymentDetails.css"

export default function PaymentDetails({payment}) {

  //Deleting DB values
  const onDelete = async()=>{
    var result = window.confirm("Do You want to Delete");

    if(result == true){
      axios.delete(`http://localhost:8000/payment/delete/${payment._id}`).then((res)=>{
      alert("Payment is deleted successfully");
    document.location.reload();
      }).catch((error)=>{
      alert("Error: Deleting payment was unsuccessful");
      console.log(error);
    })}
  }
    

  const sendID = (_id)=>{  
    localStorage.setItem('ID', _id);
  }


  return (
    <div className="details-container"><br/>
      <tr className="payment-display-container">

        <td className="table-data">
          {payment._id}
        </td>

        <td className="table-data">
          {payment.appointment_number}
        </td>

        <td className="table-data">
          {payment.owner_name}
        </td>

        <td className="table-data">
          {payment.createdAt.split('T')[0]}
        </td>

        <td className="table-data">
          <Link to='/update-payment'>
            <button id="edit-btn" onClick={()=>sendID(payment._id)}>View / Update</button>
          </Link>
        </td>
           
        <td className="table-data">
          <button id="delete-btn" type="button" onClick={onDelete}>Delete</button>
        </td>

      </tr><br/>
    </div>
  )
}
