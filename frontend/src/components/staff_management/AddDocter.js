import React from 'react';
import axios from 'axios';
 import "../styles/header.css";
 import "../styles/common.css";
 import "../styles/retrieveTable.css";
//  import "../CSS/style.css";
 import NavBar from './StaffNav';
 import "../styles/ranugi_css/AddDocter.css";
   

 


export default class AddDocter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            docName:"",
            docID:"",
            age:"",
            specialization:"",
            experience:"",
            salary:"",
            password:"",
        }
      }
      handleInputChange= (e) =>{
        const {name,value}=e.target;
    
        this.setState({
          ...this.state,
          [name]:value
        })
      }
      
      onSubmit=(e)=>{
        e.preventDefault();
    
        const{docName,docID,age,specialization,experience,salary,password}=this.state;
    
        const data={
            docName:docName,
            docID:docID,
            age:age,
            specialization:specialization,
            experience:experience,
            salary:salary,
            password:password
         
        }
    
        console.log(data)
    
        axios.post("http://localhost:8000/doctors/doctor/save",data).then((res)=>{
          if(res.data.success){
            this.setState(
              {
                docName:"",
                docID:"",
                age:"",
                specialization:"",
                experience:"",
                salary:"",
                password:""
              }
    
            )
            alert("successfully added");
          }
        })
    
      
      }
      render(){
        return(
          <div className="main-container">
             <NavBar/>     
         
       <form className="add-doctor-container"> 
       <div className="title_add">
              <h2>Add Doctor Details </h2>
            </div>
            <div className="Dochalf">
              <div className="Docitem">
             
                <label for="name">Doctor Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="doctor" type="text" name="docName" id = "name" value={this.state.docName} onChange={this.handleInputChange} required />
              </div><br/>
              <div className="Dochalf">
                <label for="docID" >Doctor ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="doctor" type="number" id = "docID" name="docID" value={this.state.docID} onChange={this.handleInputChange} required />
                
              </div><br/>
            </div>
            <div className="Dochalf">
                <div className="Docitem">
                  <label for="name">Age</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doctor" type="number" id = "name"  name="age"  value={this.state.age} onChange={this.handleInputChange} required/>
                </div><br/>
                
              
              <div className="Docitem">
              <label for="name">Specialization</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doctor" type="text" id = "name"  name="specialization"  value={this.state.specialization}  onChange={this.handleInputChange} required/>
            </div><br/>
            </div>
            <div className="Dochalf">
            <div className="Docitem">
              <label for="name">Experience</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doctor" type="number" id = "name"  name="experience"  value={this.state.experience} onChange={this.handleInputChange} required/>
            </div><br/>
            <div className="Docitem">
              <label for="name">Salary</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doctor" type="number" id = "name"  name="salary"  value={this.state.salary} onChange={this.handleInputChange} required/>
            </div><br/>

            <div className="Docitem">
              <label for="password">Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="doctor" type="text" id = "password"  name="password"  value={this.state.password} onChange={this.handleInputChange} required/>
            </div><br/>
            
            </div>
            <button href="/DoctorView/"  type="submit" class="btn btn-primary" id="btn9" onClick={this.onSubmit}>ADD DOCTOR</button>
             
        
         </form> 
         
             
       
   

                   </div>
                   

        )


    }



}