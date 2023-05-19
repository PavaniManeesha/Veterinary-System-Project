import React, { useState, useEffect } from 'react';
import {useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/anushka_css/UserPrescription.css";
import BlueCross from "./image/BlueCross.png"


export default function Prescr() {
  

  //pass input values prescription 
  const [pettid, setpetId] = useState("");
  const [medicine, setme] = useState("");
  const [labreport, setlab] = useState("");
  const [advicegiven, setadvice] = useState("");
  const [date, setDate] = useState("");
  const [docid, setdocid] = useState("");
  const {petid} =useParams("petid");

  //getting input values profiles
  const navigate = useNavigate();
  const {id} = useParams("id");
  const [prescription, setPrescription]= useState('');
  const [pet_name , setname] = useState('');
  const [breed , setbreed] = useState('');
  const [phone_number , setPhonenumber] = useState('');
  const [pet_age , setage] = useState('');
  const [address , setcaddress] = useState('');

  

  //read prescription details
  useEffect(()=>{
    axios.get(`http://localhost:8000/prescriptions/prescription/`+id)
    .then((getDataa)=>{
        
      setme(getDataa.data.prescription.medicine);
      setlab(getDataa.data.prescription.labreport);
      setadvice(getDataa.data.prescription.advicegiven);
      setDate(getDataa.data.prescription.date);
      setdocid(getDataa.data.prescription.docid);
       //console.log(getData.data.prescription.petid);
    })
},[])



  //read pet profile details
  useEffect(()=>{
    axios.get(`http://localhost:8000/profile/profiles/`+petid)
    .then((getData)=>{
    
        setname(getData.data.profiles.pet_name);
        setbreed(getData.data.profiles.breed);
        setPhonenumber(getData.data.profiles.phone_number);
        setage(getData.data.profiles.pet_age);
        setcaddress(getData.data.profiles.address);
       
        //   console.log(getData.data.profiles._id);
    })
},[])
 const giveID = (_id)=>{
  localStorage.setItem('ID',_id)
 }

 const sendDataToAPI =()=>{
  const data = {medicine,labreport,advicegiven,date}
  axios.put(`http://localhost:8000/prescriptions/prescription/update/${id}`,data)
  .then((res)=>{
      alert("Update Successful");  
      navigate(-1);   
  })
  .catch((err)=>{
      alert("Update Unsuccessful");
  })
}

 return (
  <body className="main-body">
    <div className="div-main-container">
      
      <form>   
<div className='header-main'>
        <div className='heder-container'>
            <label for="docid">Doctor ID:</label>  &nbsp;  
            <input type="text" id="docid" name="docid" value={docid} readOnly onChange={(event)=>{
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
            <label for="pet_name">Patient Name(Pet):</label>  &nbsp;  
            <input type="text" id="pet_name"  value={pet_name}  name="pet_name" readOnly onChange={(event)=>{
                setname(event.target.value);
            }} required/>
            </div><br/>

            <div className='breed-container'>
            <label for="breed">Pet Breed:</label>  &nbsp;  
            <input type="text" id="breed" value={breed} name="breed" readOnly onChange={(event)=>{
                setbreed(event.target.value);
            }} required/>
            </div><br/>

            <div className='phone-number-container'>
            <label for="phone_number">Owner Contact No:</label>  &nbsp;  
            <input type="text" id="phone_number" value={phone_number} name="phone_number" readOnly onChange={(event)=>{
                setPhonenumber(event.target.value);
            }} required/>
            </div><br/>

            <div className='pet-age-container'>
            <label for="pet_age">Age:</label>  &nbsp;  
            <input type="text" id="pet_age" value={pet_age} name="pet_age" readOnly onChange={(event)=>{
                setage(event.target.value);
            }} required/>
            </div><br/>

         

            <div className="medicin-container">
              <label id="medicinelable"for="medicine"><b>Medicine:</b></label> &nbsp;
              <textarea id="medicine" name="medicine"  value={medicine} rows="8" cols="50" onChange={(event)=>{
                setme(event.target.value);
              }} required/><br/><br/>
            </div>

            <div className="lab-report-container">
              <label id="reportlable" for="labreport"><b>Lab Report:</b></label> &nbsp;
              <textarea id="labreport" name="labreport"  value={labreport} rows="8" cols="50" onChange={(event)=>{
                setlab(event.target.value);
              }} required/><br/><br/>
              
            </div>
            
            <div className="advice-given-container">
              <label for="advicegiven" id="advicegivenLable"><b>Advice Given</b></label><br/><br/>
              <textarea id="advicegiven" name="advicegiven"  value={advicegiven} rows="8" cols="50" onChange={(event)=>{
                setadvice(event.target.value);
              }} required/><br/><br/>
            </div>
   
            <div className="date-container">
              <label for="date">Date:</label>&nbsp;&nbsp;
              <input type="Date" id="date" name="date"  value={date.split('T')[0]} onChange={(event)=>{
                setDate(event.target.value);
              }} required/><br/><br/>
            </div>
            <button class="btn btn-outline-primary" type="submit" id="saveBtn" onClick={sendDataToAPI} >Update</button>

        </form><br/><hr/><br/>
      
        <a href="/">
          <button type="button" class="btn btn-outline-primary">Back</button>
        </a>
      
    </div>
  </body>
)
}

