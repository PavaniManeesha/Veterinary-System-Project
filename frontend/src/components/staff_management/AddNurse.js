import React from 'react';
import axios from 'axios';
import "../styles/header.css";
import "../styles/common.css";
import "../styles/retrieveTable.css";
//  import "../CSS/style.css";
import NavBar from './StaffNav';
import "../styles/ranugi_css/AddNurse.css"


export default class AddNurse extends React.Component{
  constructor(props){
    super(props);
    this.state={
    nurseName:"",
    nId:"",
    nAge:"",
    workEx:"",
    gender:"",
    nSalary:""
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
    
    const{nurseName,nId,nAge,workEx,gender,nSalary}=this.state;
    
    const data={
      nurseName:nurseName,
      nId:nId,
      nAge:nAge,
      workEx:workEx,
      gender:gender,
      nSalary:nSalary
    }
    
    console.log(data)
    
        axios.post("http://localhost:8000/nurses/nurse/save",data).then((res)=>{
          if(res.data.success){
            this.setState(
              {
                nurseName:"",
                nId:"",
                nAge:"",
                workEx:"",
                gender:"",
                nSalary:""
             
              
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
          
          <form className="add-nurse-form"> 
            <div class="title_addnur">
              <h2>Add Nurse Details </h2>
            </div>
            <div class="half">

              <div class="item">
                <label for="name">Nurse Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="nurse" type="text" name="nurseName" id = "name" value={this.state.nurseName} onChange={this.handleInputChange} required />
              </div><br/>

              <div class="item">
                <label for="name" >Nurse ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="nurse" type="text" id = "name" name="nId" value={this.state.nId} onChange={this.handleInputChange} required />
              </div><br/>
            </div>
            <div class="half">

              <div class="item">
                <label for="name">Nurse age</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="nurse" type="text" id = "name"  name="nAge"  value={this.state.nAge} onChange={this.handleInputChange} required/>
              </div><br/>
                             
              <div class="item">
                <label for="name">Work experience</label>&nbsp;&nbsp;
                  <input className="nurse"   type="text" id = "name"  name="workEx"  value={this.state.workEx}  onChange={this.handleInputChange} required/>
                </div><br/>
              </div>
            <div class="half">
            <div class="item">
              <label for="name">Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="nurse" type="text" id = "name"  name="gender"  value={this.state.gender} onChange={this.handleInputChange} required/>
            </div><br/>
            <div class="item">
              <label for="name">Nurse Salary</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="nurse" type="text" id = "name"  name="nSalary"  value={this.state.nSalary} onChange={this.handleInputChange} required/>
            </div><br/>
            
            </div>
            <button type="submit" class="btn btn-primary" id="btn9" onClick={this.onSubmit}>ADD NURSE</button>
        
        
        </form>     
       
   

                   </div>
                   

        )
    }

}