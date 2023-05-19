import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
 import NavBar from './StaffNav';
 import "../styles/ranugi_css/Updatedoc.css"

export default function Update(){
    const navigate = useNavigate();
    const {id } = useParams();
    const [docName , setname] = useState('');
    const [docID , setid] = useState();
    const [age , setag] = useState('');
    const [specialization , setspec] = useState('');
    const [experience , setexp] = useState('');
    const [salary , setsal] = useState('');
    
    
    useEffect(()=>{
      axios.get(`http://localhost:8000/Doctors/doctor/`+id)
        .then((getData)=>{
            
            setname(getData.data.doctor.docName);
            setid(getData.data.doctor.docID);
            setag(getData.data.doctor.age);
            setspec(getData.data.doctor.specialization);
            setexp(getData.data.doctor.experience);
            setsal(getData.data.doctor.salary);
            
            // console.log(getData.data.supplier.supplier_name);
        })
    },[])

    const sendDataToAPI =()=>{
        const data = {docName,docID,age,specialization,experience,salary}
        axios.put(`http://localhost:8000/doctors/doctor/update/${id}`,data)
        .then((res)=>{
            alert("Update Successfull");  
            navigate(-1);   
        })
        .catch((err)=>{
            alert("Update Unsuccessfull");
        })
    }
 

    return(
        <div className="main-container">
             <NavBar/> 
            <form className="update-doctor-container"> 
       <div className="title_upda">
              <h2>Update Doctor Details</h2>
            </div>
            <div className="Dochalf">
              <div className="Docitem">
             
                <label for="name">DOCTOR NAME</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="doc" type="text" name="docName" id = "name" value={docName} onChange={(e) => setname(e.target.value)} required />
              </div><br/>
              <div className="Docitem">
                <label for="email" >DOCTOR ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="doc" type="text" id = "email" name="docID" value={docID} onChange={(e) => setid(e.target.value)} required />
                
              </div><br/>
            </div>
            <div className="Dochalf">
                <div className="Docitem">
                  <label for="name">AGE</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doc" type="text" id = "name"  name="age" value={age} onChange={(e) => setag(e.target.value)} required/>
                </div><br/>
                
              
              <div className="Docitem">
              <label for="name">SPECIALIZATION</label>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doc" type="text" id = "name"  name="specialization"   value={specialization} onChange={(e) => setspec(e.target.value)} required/>
            </div><br/>
            </div>
            <div className="Dochalf">
            <div className="Docitem">
              <label for="name">EXPERIENCE</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doc" type="text" id = "name"  name="experience"  value={experience} onChange={(e) => setexp(e.target.value)} required/>
            </div><br/>
            <div className="Docitem">
              <label for="name">SALARY</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doc" type="text" id = "name"  name="salary"  value={salary} onChange={(e) => setsal(e.target.value)} required/>
            </div><br/>
            
            </div>
            <button type="submit" class="btn btn-primary" id="btn9" onClick={sendDataToAPI}>UPDATE</button>
        
        
        </form> 
        </div>
    );
}