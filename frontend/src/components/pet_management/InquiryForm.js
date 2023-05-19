import React, { useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from './PetNavBar';
import "../styles/common.css";
import "../styles/pavani_css/Newform.css";
import { useParams } from 'react-router-dom';

export default function Use_profile() {

  
  //Getting input values
  const {id} = useParams();
  const [o_name, setO_name] = useState("");
  const [p_number, setp_number] = useState("");
  const [e_address, sete_address] = useState("");
  const [inquiry, setinquiry] = useState("");
  

  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  };

  

  //Creating new Appointment
  function sendData(s){
    s.preventDefault();

    //Creating object
    const newinquiry ={
        ownerid,
        o_name,
        p_number,
        e_address,
        inquiry
    }
    
    //passing data to the DB
    axios.post("http://localhost:8000/inquiries/save", newinquiry).then(()=>{

      alert("Inquiry  is successful add",refreshPage());
      console.log(newinquiry);

    }).catch((err)=>{

      alert("Error: Inquiry not added");
      console.log(err);

    })

  }
  useEffect(()=>{
    axios.get(`http://localhost:8000/profiles/`+id)
    .then((getData)=>{
        
        setO_name(getData.data.profiles.pet_owner_name);
        setp_number(getData.data.profiles.phone_number);
        sete_address(getData.data.profiles.email_address);
        
       

        // console.log(getData.data.profiles.email_address);
    })
},[])
const ownerid = id;

console.log(ownerid);

  return (
          <div className="main-container">
            <NavBar/>
            <div className="body-container clearfix">

              <div className="order-section-one-container ">
                  <div className="order-section-one-left ">
                      <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                        INQUIRY
                      </h3>
                  </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                      <div className="card-body bg-light">
                        <div className="container">


                          <form onSubmit={sendData}>

                            
                          <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                    
                                      <input type="text" id="ownerid" name="ownerid" hidden value={ownerid} class="form-control" 
                                   />
                                     
                                    </div>
                                  </div>
                            </div>    

                            <div className="controls">
                            
                              <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="o_name">Pet Owner Name </label><br/>
                                      <input type="text" id="o_name" name="o_name" value={o_name} class="form-control" readOnly onChange={(event)=>{

                                         setO_name(event.target.value);

                                      }}  required />
                                     
                                    </div>
                                  </div>
                                 


                              <div className="row">

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="e_address">Email</label><br/>
                                    <input type="email" id="e_address" name="e_address"  value={e_address}  class="form-control" onChange={(event)=>{

                                      sete_address(event.target.value);

                                    }} required />
                                    
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="p_number">Contact No</label>
                                    <input type="text" id="p_number" name="p_number" value={p_number} class="form-control" onChange={(event)=>{

                                      setp_number(event.target.value);

                                    }} required />
                                     <br></br>
                                  </div>
                                </div>

                              </div>

                              <div className="row">

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="inquiry">INQUIRY </label><br/>
                                    <textarea  rows="3" cols="50" id="inquiry" name="inquiry" class="form-control" onChange={(event)=>{

                                      setinquiry(event.target.value);

                                    }} required />
                                    <br></br>
                                  </div>
                                </div>
                             
                                <div class="col-md-12">
                                  <input type="submit" id="submit-btn" className="btn btn-success btn-send  pt-2 btn-block" value="Submit"></input>
                                  
                                </div>
                                <br></br>
                                
                                <a href="/viewPets"><button type="button" class="btn btn-outline-primary" style={{marginTop:'30px'}}>Back</button></a>

                             </div>
                            
                             </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    )

}