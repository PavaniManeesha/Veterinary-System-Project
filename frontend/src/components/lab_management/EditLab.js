import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
//import NavBar from './SupNav';
import "../styles/abhiseka_css/labupdate.css";
import NavBar from './LabsNavBar';

export default function Update(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [labType , setname] = useState('');
    const [assignedLabAssistant , setsup] = useState();

    
    
    useEffect(()=>{
      axios.get(`http://localhost:8000/lab/get/`+id)
        .then((getData)=>{
            
            setname(getData.data.labs.labType);
            setsup(getData.data.labs.assignedLabAssistant);
            // setmob(getData.data.supplier.mobile_number);
            // setemail(getData.data.supplier.e_mail);
            // setcat(getData.data.supplier.category);
            // setadd(getData.data.supplier.address);
            //console.log(getData.data.labs.labType);
        })
    },[])
    console.log(labType);
    //axios.get(`http://localhost:8000/supplier/suppliers/`+id)
    const sendDataToAPI =()=>{
        const data = {labType,assignedLabAssistant}
        axios.put(`http://localhost:8000/lab/update/${id}`,data)
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
           
            <form className='labupdate'> 
       
            <div class="half">
              <div class="item">
             
                <label for="lab">Laboratory Type</label>
                <input type="text" name="lab_Type" id = "name" value={labType} onChange={(e) => setname(e.target.value)} required />
              </div>
              <div class="item">
                <label for="assistant">Assigned Lab Assistant</label>
                <input type="text" id = "name" name="assignedLabAssistant" value={assignedLabAssistant} onChange={(e) => setsup(e.target.value)} required />
                
              </div>
            </div>
            


            <button type="submit" class="btn btn-primary" id="btn9" onClick={sendDataToAPI}>UPDATE</button>
        
        
        </form> 
        </div>
    );
}