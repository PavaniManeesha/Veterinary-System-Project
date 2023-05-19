import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
import NavBar from './PetNavBar';
import "../styles/common.css";
import "../styles/header.css";
import "../styles/retrieveTable.css";
//import "./styles/petupdate.css";

export default function Update(){
    const navigate = useNavigate();
    const {id } = useParams();
    const [pet_owner_name , setOwnerName] = useState('');
    const [phone_number , setPhone] = useState();
    const [email_address , setemail] = useState('');
    const [address , setAddress] = useState('');
    const [pet_name , setPetName] = useState('');
    const [pet_age , setpetAge] = useState('');
    const [pet_Type,setPetType]=useState("");
    const [breed, setBreed] = useState("");
    const [gender, setGender] = useState("");
    const [pet_Status,setPetstatus]=useState("");
    const [last_Vaccinate_Date,setVaccinateDate]=useState ("");
    
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/profile/profiles/`+id)
        .then((getData)=>{
            
            setOwnerName(getData.data.profiles.pet_owner_name);
            setPhone(getData.data.profiles.phone_number);
            setemail(getData.data.profiles.email_address);
            setAddress(getData.data.profiles.address);
            setPetName(getData.data.profiles.pet_name);
            setpetAge(getData.data.profiles.pet_age);
            setPetType(getData.data.profiles.pet_Type);
            setBreed(getData.data.profiles.breed);
            setGender(getData.data.profiles.gender);
            setPetstatus(getData.data.profiles.pet_Status);
            setVaccinateDate(getData.data.profiles.last_Vaccinate_Date);


            // console.log(getData.data.profiles.pet_owner_name);
        })
    },[])
    
    const sendDataToAPI =()=>{
        const data = {pet_owner_name,phone_number,email_address,address,pet_name,pet_age,pet_Type,breed,gender,pet_Status,last_Vaccinate_Date}
        axios.put(`http://localhost:8000/profile/profiles/update/${id}`,data)
        .then((res)=>{
            alert("Update Successful");  
            navigate(-1);   
        })
        .catch((err)=>{
            alert("Update Unsuccessful");
        })
    }
 

    return (
      <div className="main-container">
        <NavBar/>
        <div className="body-container clearfix">

          <div className="order-section-one-container ">
              <div className="order-section-one-left ">
                  <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                    UPDATE PET DETAILS
                  </h3>
              </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="card mt-2 mx-auto p-4 bg-light">
                  <div className="card-body bg-light">
                    <div className="container">
                      <form onSubmit={sendDataToAPI}>

                        <div className="controls">
                        
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="pet_owner_name">Pet Owner Name </label><br/>
                                  <input type="text" id="pet_owner_name" name="pet_owner_name" value={pet_owner_name} class="form-control" onChange={(event)=>{

                                     setOwnerName(event.target.value);

                                  }}  required />
                                 
                                </div>
                              </div>
                              <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="address">Address </label><br/>
                                  <textarea  rows="3" cols="50" id="address" name="address" value={address} class="form-control" onChange={(event)=>{

                                     setAddress(event.target.value);

                                  }} 
                                  required />
                                 
                                </div>
                              </div>

                          

                          <div className="row">

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="email_address">Email</label><br/>
                                <input type="email" id="email_address" name="email_address"  value={email_address} class="form-control" onChange={(event)=>{

                                  setemail(event.target.value);

                                }} required />
                                <span>Please enter a valid email address!</span>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="contactNo">Contact No</label>
                                <input type="text" id="contactNo" name="phone_number" value={phone_number} class="form-control" onChange={(event)=>{

                                  setPhone(event.target.value);

                                }} required />
                                
                              </div>
                            </div>

                          </div>

                          <div className="row">

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="petName">Pet Name</label><br/>
                                <input type="text" id="petName" name="pet_name" value={pet_name} class="form-control" onChange={(event)=>{

                                  setPetName(event.target.value);

                                }} required />
                               
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="pet_age">Pet Age</label><br/>
                                <input type="text" id="pet_age" name="pet_age" value={pet_age} class="form-control" onChange={(event)=>{

                                  setpetAge(event.target.value);

                               }}  required />
                            
                             </div>
                           </div>

                         </div>
                         <div className="row">

                           <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="pet_Type">Pet Type</label><br/>
                                <input type="text" id="pet_Type" name="pet_Type" value={pet_Type} class="form-control"  readOnly onChange={(event)=>{

                                  setPetType(event.target.value);

                                }} required />
                               
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="breed">Pet Breed </label><br/>
                                  <input type="text" id="breed" name="breed" value={breed} class="form-control" readOnly onChange={(event)=>{

                                     setBreed(event.target.value);

                                  }}  required />
                                
                                </div>
                              </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="last_Vaccinate_Date">Last Vaccination Date</label><br/>
                                <input type="text" id="last_Vaccinate_Date" name="last_Vaccinate_Date"  value={last_Vaccinate_Date.split('T')[0]} class="form-control" onChange={(event)=>{

                                  setVaccinateDate(event.target.value);

                                }} required/>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="gender"> Pet Gender</label><br/>
                                <select id="gender" name="gender" value={gender} class="form-control" onChange={(event)=>{

                                  setGender(event.target.value);

                                }} required>

                                  <option  selected disabled value="0">--Select Gender--</option>
                                  <option value="General Checkup">Female</option>
                                  <option value="Vaccination">Male</option>
                                  <option value="other">Other</option>

                                </select>
                               
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="pet_Status">Pet Status </label><br/>
                                  <textarea  rows="3" cols="50" id="pet_Status" name="pet_Status" value={pet_Status} class="form-control" onChange={(event)=>{

                                     setPetstatus(event.target.value);

                                  }}  required />
                                 
                              </div>
                              <br/>
                           
                          </div>
                          <div class="col-md-12">
                            <input type="submit" id="petSubmit-btn" className="btn btn-success btn-send  pt-2 btn-block" value="SAVE DETAILS"></input>

                            <br></br>

                            <a href="/"><button type="button" class="btn btn-outline-primary" style={{marginTop:'30px'}}>Back</button></a>
                          </div>
                         </div>
                         </div>
                         </div>
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