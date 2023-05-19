import React, { useState, useEffect ,useRef} from 'react';
import {useParams,useNavigate } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import "../styles/pavani_css/ViewProfile.css"


export default function Staffreport({search,setSearch}){
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:'pet-data',
    onAfterPrint:()=>alert('Print Success')

  });


  //getting input values profiles
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
  

  //read profile details
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

 const giveID = (_id)=>{
  localStorage.setItem('ID',_id)
 }
  return (

    <div className="main-container">
    
    <div className="body-container clearfix">

      <div className="order-section-one-container ">
          <div className="order-section-one-left ">
              <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                PET PROFILE
              </h3>
          </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                <form id="view-profile-form"> 

                    <div className="controls">
                    <div ref={componentRef} style={{width:'100%',height:window.innerHeight}}>
                    
                      <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="pet_owner_name">Pet Owner Name </label><br/>
                              <input type="text" id="pet_owner_name" value={pet_owner_name} name="pet_owner_name" class="form-control" readOnly onChange={(event)=>{

                                 setOwnerName(event.target.value);

                              }}  required />
                             
                            </div>
                          </div>
                          <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="address">Address </label><br/>
                              <textarea  rows="3" cols="50" id="address" value={address}  name="address" class="form-control" readOnly onChange={(event)=>{

                                 setAddress(event.target.value);

                              }} 
                              required />
                             
                            </div>
                          </div>

                          {/* <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="nic">NIC</label><br/>
                              <input className ="form-input" type="text" id="nic" name="phone_number" class="form-control" onChange={(event)=>{

                                setNIC(event.target.value);

                              }} pattern="(([0-9][vV]|[0-9])){12,13}" required onBlur={handleFocus} focused={focused.toString()}/>
                              <span>NIC should be only 12 digits or 12 digits and letter V and shouldnt include any other letters or special characters!</span>
                            </div>
                          </div>
                      </div> */}

                      <div className="row">

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email_address">Email</label><br/>
                            <input type="email" id="email_address"  value={email_address} name="email_address" class="form-control" readOnly onChange={(event)=>{

                              setemail(event.target.value);

                            }} required />
                            <span>Please enter a valid email address!</span>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="contactNo">Contact No</label>
                            <input type="text" id="contactNo" value={phone_number} name="phone_number" class="form-control" readOnly  onChange={(event)=>{

                              setPhone(event.target.value);

                            }} required />
                            
                          </div>
                        </div>

                      </div>

                      <div className="row">

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="petName">Pet Name</label><br/>
                            <input type="text" id="petName" value={pet_name}  name="pet_name" class="form-control" readOnly onChange={(event)=>{

                              setPetName(event.target.value);

                            }} required />
                           
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="pet_age">Pet Age</label><br/>
                            <input type="text" id="pet_age"  value={pet_age} name="pet_age" class="form-control" readOnly  onChange={(event)=>{

                              setpetAge(event.target.value);

                           }}  required />
                        
                         </div>
                       </div>
                       <input hidden
                           required/>

                     </div>
                     <div className="row">

                       <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="pet_Type">Pet Type</label><br/>
                            <input type="text" id="pet_Type" value={pet_Type} name="pet_Type" class="form-control" readOnly  onChange={(event)=>{

                              setPetType(event.target.value);

                            }} required />
                           
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="breed">Pet Breed </label><br/>
                              <input type="text" id="breed" value={breed} name="breed" class="form-control" readOnly onChange={(event)=>{

                                 setBreed(event.target.value);

                              }}  required />
                            
                            </div>
                          </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="last_Vaccinate_Date">Last Vaccination Date</label><br/>
                            <input type="date" id="last_Vaccinate_Date" value={last_Vaccinate_Date.split('T')[0]} name="last_Vaccinate_Date" class="form-control" onChange={(event)=>{

                              setVaccinateDate(event.target.value);

                            }} required/>
                            
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="gender"> Pet Gender</label><br/>
                            <select id="gender" value={gender} name="gender" class="form-control"readOnly  onChange={(event)=>{

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
                              <textarea  rows="3" cols="50" id="pet_Status" value={pet_Status}  name="pet_Status" class="form-control" readOnly onChange={(event)=>{

                                 setPetstatus(event.target.value);

                              }}  required />
                             <br></br>
                          </div>
                         

                          
                       
                      </div>
                      <div class="col-md-12">
                      
                      </div>
                     </div>
                     </div>
                     </div>
                     </div>
                     </div>
                    </div>
                  </div>
                  </form>
                  {/* <a href="/"><button type="button" class="btn btn-outline-primary" style={{marginTop:'30px'}}>Back</button></a> */}
                  <br></br><br></br>
                  <a href={"/InquiryForm/"+id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Inquiry
                                </button>
                              </a>
                </div>
              </div>
            </div>
            <button onClick={handlePrint}>Print this out</button>
          </div>          
        </div>
      </div>
    </div>
  </div>
    
  );
}
