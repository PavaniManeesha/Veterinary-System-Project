import React, { Component } from "react";
import axios from "axios";
import NavBar from './LabsNavBar';
// import "../components/styles/common.css";
// import "../components/styles/header.css";
import "../styles/navBar.css";
// import "../components/styles/retrieveTable.css"
import "../styles/abhiseka_css/createreservation.css";

export default class CreateReservation extends Component{


    constructor(props){
        super(props);
        this.state={
            petName:"",
            petOwner:"",
            doctor:"",
            testType:"",
            lab:"",
            date:"",
            time:"",
            ownerContact:""
        }
    }







    

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const {petName,petOwner,doctor,testType,lab,date,time,ownerContact} = this.state;

        if (petName.trim().length === 0) {
            alert("Pet name cannot be empty !");
          } else if(petOwner.trim().length===0){
            alert("Pet Owner name cannot be empty !");
          } else if(doctor.trim().length===0){
            alert("Doctor cannot be empty !");
          }
           else if(testType.trim().length===0){
            alert("Test Type cannot be empty !");
          }
          else if(lab.trim().length===0){
            alert("Laboratory cannot be empty !");
          }
          else if(date.trim().length===0){
            alert("date cannot be empty");
          }else if(time.trim().length===0){
            alert("Time cannot be empty !");
          }
          else if(ownerContact.trim().length===0){
            alert("Owner Contact no cannot be empty !");
          }else{

        const data = {
            petName:petName,
            petOwner:petOwner,
            doctor:doctor,
            testType:testType,
            lab:lab,
            date:date,
            time:time,
            ownerContact:ownerContact
        }

        console.log(data)

        axios.post("reservation/reservation/save",data).then((res) =>{
            if(res.data.success){
                
                alert("Create Successfully");
                this.setState(
                    {
                        petName:"",
                        petOwner:"",
                        doctor:"",
                        testType:"",
                        lab:"",
                        date:"",
                        time:"",
                        ownerContact:""
                    }
                )
            }
        })
    }

    }



    render(){
        return(
            <div className='main-container'>
        <NavBar/>
        
            <div class="card-body bg-light">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 class="text-center">Make New Reservation</h1>
                    <form id="createres" className="createreservation" noValidate>
                    <div className="resfields">
                        <div className="petname" style={{marginBottom:"5px"}}>
                            <label style={{marginBottom:'2px'}}>Pet Name</label>
                            <input type="text"
                            className="form-control"
                            name="petName"
                            placeholder="Enter pet name"
                            value={this.state.petName}
                            onChange={this.handleInputChange}/>
                        </div>



                
                        <div className="row">  
                    <div className="col">
                        <div className="powner" style={{marginBottom:"5px"}}>
                            <label style={{marginBottom:'5px'}}>Owner</label>
                            <input type="text"
                            className="form-control"
                            name="petOwner"
                            placeholder="Enter Pet Owner"
                            value={this.state.petOwner}
                            onChange={this.handleInputChange}/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="contactno" style={{marginBottom:"15px"}}>
                            <label style={{marginBottom:'5px'}}>Contact No</label>
                            <input type="tel"
                            className="form-control"
                            name="ownerContact"
                            placeholder="0xxx xx xxxx"
                            value={this.state.ownerContact}
                            onChange={this.handleInputChange}/>
                        </div>
                        </div>
                        </div>

                        <div className="doctor" style={{marginBottom:"15px"}}>
                            <label style={{marginBottom:'5px'}}>Doctor</label>
                            <input type="text"
                            className="form-control"
                            name="doctor"
                            placeholder="Enter doctor"
                            value={this.state.doctor}
                            onChange={this.handleInputChange}/>
                        </div>
                                            
                                                
                                                  <div className="testtype" style={{marginBottom:"15px"}}>
                                                        <label style={{marginBottom:'5px'}}>Test</label>
                                                        <input type="text"
                                                        className="form-control"
                                                        name="testType"
                                                        placeholder="Enter test"
                                                        value={this.state.testType}
                                                        onChange={this.handleInputChange}/>
                                                    </div>
                                               
                                                
                                              
                                                    <div className="laboratory" style={{marginBottom:"15px"}}>
                                                        <label style={{marginBottom:'5px'}}>Laboratory</label>
                                                        <input type="text"
                                                        className="form-control"
                                                        name="lab"
                                                        placeholder="Enter Lab"
                                                        value={this.state.lab}
                                                        onChange={this.handleInputChange}/>
                                                    </div>
                                              
                    <div className="row">  
                    <div className="col"> 
                        <div className="resdate" style={{marginBottom:"15px"}}>
                            <label style={{marginBottom:'5px'}}>Date</label>
                            <input type="Date"
                            className="form-control"
                            name="date"
                            placeholder="Enter date"
                            value={this.state.date}
                            onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="restime" style={{marginBottom:"15px"}}>
                            <label style={{marginBottom:'5px'}}>Time</label>
                            <input type="time"
                            className="form-control"
                            name="time"
                            placeholder="Enter time"
                            value={this.state.time}
                            onChange={this.handleInputChange}/>
                        </div>
                        </div>
                        </div>
                        <br></br>
                        <div class="d-grid gap-2 col-5 mx-auto">
                        <button className="btn" type="submit" id="myBtn2" style={{marginTop:'30px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Create
                        </button>
                        </div>

                        </div>
                    </form>


                 
            </div>
            </div>
            </div>
          

        )
    }
}