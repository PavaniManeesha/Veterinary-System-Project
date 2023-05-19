import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
//import NavBar from './SupNav';
import "../styles/abhiseka_css/reservationupdate.css";
import NavBar from './LabsNavBar';

export default function Update(){
    // const navigate = useNavigate();
    const { id } = useParams();
    const [petName , setpet] = useState('');
    const [petOwner , setowner] = useState('');
    const [doctor , setdoctor] = useState('');
    const [testType , settest] = useState('');
    const [lab , setlab] = useState('');
    const [time , settime] = useState('');
    const [date , setdate] = useState('');
    const [ownerContact , setcontact] = useState('');

    
    
    useEffect(()=>{
      axios.get(`http://localhost:8000/reservation/get/`+id)
        .then((getData)=>{
            
            setpet(getData.data.reservation.petName);
            setowner(getData.data.reservation.petOwner);
            setdoctor(getData.data.reservation.doctor);
            settest(getData.data.reservation.testType);
            setlab(getData.data.reservation.lab);
            settime(getData.data.reservation.time);
            setdate(getData.data.reservation.date);
            setcontact(getData.data.reservation.ownerContact);
            // setmob(getData.data.supplier.mobile_number);
            // setemail(getData.data.supplier.e_mail);
            // setcat(getData.data.supplier.category);
            // setadd(getData.data.supplier.address);
            //console.log(getData.data.labs.labType);
        })
    },[])
    console.log(petName);
    
    const sendDataToAPI =()=>{
        const data = {petName,petOwner,doctor,testType,lab,time,date,ownerContact}
        axios.put(`http://localhost:8000/reservation/update/${id}`,data)
        .then((res)=>{
            alert("Update Successfull");  
            //  navigate(-1);   
        })
        .catch((err)=>{
            alert("Update Unsuccessfull");
        })
    }
 

    return(
        <div className="main-container">
           <NavBar/>
            <form className='reservationupdate'> 
              
            <div class = "row">
                    <div class = "col">
                            <div class="half">
                              <div class="item" style={{marginBottom:"15px"}}>
                                <label for="petname">Pet Name</label>
                                <input type="text" name="pet_name" id = "name" value={petName} onChange={(e) => setpet(e.target.value)} required />
                              </div>
                            </div>
                    </div>

                    <div class = "col">
                      <div class="half">
                        <div class="item" style={{marginBottom:"15px"}}>
                          <label for="petowner">Pet Owner</label>
                          <input type="text" id = "name" name="pet_owner" value={petOwner} onChange={(e) => setowner(e.target.value)} required />
                        </div>
                      </div>
                    </div>
            </div>

            <div class = "row">
                    <div class = "col">
                            <div class="half">
                              <div class="item" style={{marginBottom:"15px"}}>
                                <label for="doctor">Doctor</label>
                                <input type="text" id = "name" name="doctor" value={doctor} onChange={(e) => setdoctor(e.target.value)} required />
                              </div>

                              <div class="item" style={{marginBottom:"15px"}}>
                                  <label for="testtype">Test Type</label>
                                  <input type="text" id = "name" name="test_type" value={testType} onChange={(e) => settest(e.target.value)} required />
                              </div>
                            </div>
                    </div>
          </div>


                <div class = "row">
                    <div class="half">
                        <div class="item" style={{marginBottom:"15px"}}>
                          <label for="lab">Laboratory</label>
                          <input type="text" id = "name" name="laboratory" value={lab} onChange={(e) => setlab(e.target.value)} required />
                        </div>
                    </div>
                </div>


                <div class = "row">
                    <div class = "col">
                            <div class="half">
                                <div class="item" style={{marginBottom:"15px"}}>
                                  <label for="date">Date</label>
                                  <input type="date" id = "name" name="date" value={date} onChange={(e) => setdate(e.target.value)} required />
                                </div>
                            </div>
                    </div>

              <div class = "col">
                  <div class="half">
                        <div class="item" style={{marginBottom:"15px"}}>
                          <label for="time">Time</label>
                          <input type="time" id = "name" name="time" value={time} onChange={(e) => settime(e.target.value)} required />
                        </div>
                  </div>
              </div>
            </div>

            <div class = "row">
                    <div class="half">
                        <div class="item" style={{marginBottom:"15px"}}>
                          <label for="lab">Contact Details</label>
                          <input type="text" id = "name" name="ownerContact" value={ownerContact} onChange={(e) => setcontact(e.target.value)} required />
                        </div>
                    </div>
                </div>
        
            <button type="submit" class="btn btn-primary" id="btn9" style={{marginTop:'30px'}} onClick={sendDataToAPI}>UPDATE</button>
        
        
        </form> 
        </div>
      
    );
}