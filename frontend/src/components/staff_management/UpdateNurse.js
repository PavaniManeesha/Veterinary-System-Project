import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
import NavBar from './StaffNav';
import "../styles/ranugi_css/UpdateNurse.css"

export default function Update(){
    const navigate = useNavigate();
    const {id } = useParams();
    const [nurseName , setname] = useState('');
    const [nId , setid] = useState();
    const [nAge , setag] = useState('');
    const [workEx , setwe] = useState('');
    const [gender , setgen] = useState('');
    const [nSalary , setsal] = useState('');
    
    
    useEffect(()=>{
      axios.get(`http://localhost:8000/nurses/nurse/`+id)
        .then((getData)=>{
            
            setname(getData.data.nurse.nurseName);
            setid(getData.data.nurse.nId);
            setag(getData.data.nurse.nAge);
            setwe(getData.data.nurse.workEx);
            setgen(getData.data.nurse.gender);
            setsal(getData.data.nurse.nSalary);
            
            // console.log(getData.data.supplier.supplier_name);
        })
    },[])

    const sendDataToAPI =()=>{
        const data = {nurseName,nId,nAge,workEx,gender,nSalary}
        axios.put(`http://localhost:8000/nurses/nurse/update/${id}`,data)
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
            <form ClassName="update-nuse-container"> 
       <div className="title_update">
              <h2>Update Nurse Details </h2>
            </div>
            <div class="half">
              <div class="item">
             
                <label className="fun" for="name">NURSE NAME</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="nur" type="text" name="nurseName" id = "name" value={nurseName} onChange={(e) => setname(e.target.value)} required />
              </div><br/>
              <div class="item">
                <label className="fun" for="email" >NURSE ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="nur" type="text" id = "name" name="nId" value={nId} onChange={(e) => setid(e.target.value)} required />
                
              </div><br/>
            </div>
            <div class="half">
                <div class="item">
                  <label className="fun"  for="name">AGE</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="nur" type="text" id = "name"  name="nAge" value={nAge} onChange={(e) => setag(e.target.value)} required/>
                </div><br/>
                
              
              <div class="item">
              <label className="fun" for="name">WORK EXPERIENCE</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="nur" type="text" id = "name"  name="workEx"   value={workEx} onChange={(e) => setwe(e.target.value)} required/>
            </div><br/>
            </div>
            <div class="half">
            <div class="item">
              <label className="fun" for="name">GENDER</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="nur" type="text" id = "name"  name="gender"  value={gender} onChange={(e) => setgen(e.target.value)} required/>
            </div><br/>
            <div class="item">
              <label className="fun" for="name">SALARY</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="nur" type="text" id = "name"  name="nSalary"  value={nSalary} onChange={(e) => setsal(e.target.value)} required/>
            </div><br/>
            
            </div>
            <button input className="bbtn" type="submit" class="btn btn-primary" id="btn9" onClick={sendDataToAPI}>UPDATE</button>
        
        
        </form> 
        </div>
    );
}