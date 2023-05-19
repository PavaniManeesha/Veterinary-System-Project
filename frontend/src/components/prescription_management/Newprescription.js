import React, { useState, useEffect } from 'react';
import {useParams,useNavigate } from "react-router-dom";
import axios from 'axios'

import "../styles/anushka_css/UserPrescription.css";
import BlueCross from "./image/BlueCross.png"

export default function UserPrescription() {

  //pass input values prescription 
  const [medicine, setme] = useState("");
  const [labreport, setlab] = useState("");
  const [advicegiven, setadvice] = useState("");
  const [date, setDate] = useState("");
  const [docid, setdocid] = useState("");

  //getting input values profiles
  const navigate = useNavigate();
  const {id} = useParams();
  const [phone_number , setPhone] = useState();
 
  const [pet_name , setPetName] = useState('');
  const [pet_age , setpetAge] = useState('');
  const [breed, setBreed] = useState("");
    
  const petid = id;
  console.log(petid);

  //Creating new prescription
  function sendData(s){
    s.preventDefault();

    //Creating object
    const newPrescription ={
        docid,
        petid,
        medicine,
        labreport,
        advicegiven,
        date,
        
        
    }
    console.log(newPrescription);
    //passing data to the DB
    axios.post("http://localhost:8000/prescriptions/prescription/save/",newPrescription).then(()=>{
     
    alert("Prescription details added is successful");
      //console.log(newPrescription);
    navigate(-1);
    }).catch((err)=>{
      alert("insert is successful");
      navigate(-1);
      console.log(err);
    })

  }

  

  //read pet profile details  
  useEffect(()=>{
    axios.get(`http://localhost:8000/profile/profiles/`+id)
    .then((getData)=>{
       
       
        setPhone(getData.data.profiles.phone_number);
       
        setPetName(getData.data.profiles.pet_name);
        setpetAge(getData.data.profiles.pet_age);
        setBreed(getData.data.profiles.breed);
  
        
     
    })
},[])

  return (
    <body className="main-body">
      <div className="div-main-container">
        
        <form onSubmit={sendData}>   
<div className='header-main'>
          <div className='heder-container'>
              <label for="docid">Doctor ID:</label>  &nbsp;  
              <input type="text" id="docid" name="docid" onChange={(event)=>{
                  setdocid(event.target.value);
              }} required/>
              </div><br/>

              <div className='heder-container'>
                <div id="imageId">
              <img src={BlueCross} alt="BlueCross" width="100px"/>
              </div>
                </div>
              <div  className='heder-container'>
                <div id="addressId">
                <h5>
              Mount Pet Clinic, 107/1
              <br/>
              Abeysekara Rd,
              <br/>
              Dehiwala, SriLanka
                </h5>
                </div>
             </div>
         </div>
              
              <div className='petid-container'>
              <label for="petid"></label>  &nbsp;  
              <input type="text" id="petid" name="petid" hidden value= {id} required/>
              </div><br/><hr/><br/>

              <div className='pet-name-container'>
              <label for="pet_name"><b>Patient Name(Pet):</b></label>  &nbsp;  
              <input type="text" id="pet_name"  value={pet_name}  name="pet_name" readOnly onChange={(event)=>{
                  setPetName(event.target.value);
              }} required/>
              </div><br/>

              <div className='breed-container'>
              <label for="breed"><b>Pet Breed:</b></label>  &nbsp;  
              <input type="text" id="breed" value={breed} name="breed" readOnly onChange={(event)=>{
                  setBreed(event.target.value);
              }} required/>
              </div><br/>

              <div className='phone-number-container'>
              <label for="phone_number"><b>Owner Contact No:</b></label>  &nbsp;  
              <input type="text" id="phone_number" value={phone_number} name="phone_number" readOnly onChange={(event)=>{
                  setPhone(event.target.value);
              }} required/>
              </div><br/>

              <div className='pet-age-container'>
              <label for="pet_age"><b>Age:</b></label>  &nbsp;  
              <input type="text" id="pet_age" value={pet_age} name="pet_age" readOnly onChange={(event)=>{
                  setpetAge(event.target.value);
              }} required/>
              </div><br/>

           

              <div className="medicin-container">
                <label id="medicinelable"for="medicine"><b>Medicine:</b></label> &nbsp;
                <textarea id="medicine" name="medicine" rows="8" cols="50" onChange={(event)=>{
                  setme(event.target.value);
                }} required/><br/><br/>
              </div>

              <div className="lab-report-container">
                <label id="reportlable" for="labreport"><b>Lab Report:</b></label> &nbsp;
                <textarea id="labreport" name="labreport" rows="8" cols="50" onChange={(event)=>{
                  setlab(event.target.value);
                }} required/><br/><br/>
                
              </div>
              
              <div className="advice-given-container">
                <label for="advicegiven" id="advicegivenLable"><b>Advice Given</b></label><br/><br/>
                <textarea id="advicegiven" name="advicegiven" rows="8" cols="50" onChange={(event)=>{
                  setadvice(event.target.value);
                }} required/><br/><br/>
              </div>
     
              <div className="date-container">
                <label for="date"><b>Date:</b></label>&nbsp;&nbsp;
                <input type="Date" id="date" name="date" onChange={(event)=>{
                  setDate(event.target.value);
                }} required/><br/><br/>
              </div>
              <input class="btn btn-outline-primary" type="submit" id="saveBtn"  value="SAVE"></input>

          </form><br/><hr/><br/>

          <a href={"/DocViewAppoinment" }>
            <button type="button" class="btn btn-outline-primary">Back</button>
          </a>
        
      </div>
    </body>
  )
}