import React, { Component } from "react"
import axios from 'axios';
import NavBar from "./LabsNavBar";
//import "../components/styles/common.css";
//import "../components/styles/header.css";
import "../styles/navBar.css";
import "../styles/abhiseka_css/createlab.css";
//import "../components/styles/retrieveTable.css"


export default class Createlab extends Component{


    constructor(props){
        super(props);
        this.state={
            labType:"",
            assignedLabAssistant:""
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

        const {labType,assignedLabAssistant} = this.state;


        if (labType.trim().length === 0) {
            alert("Lab Type cannot be empty !");
          } else if(assignedLabAssistant.trim().length===0){
            alert("Lab Assistant name cannot be empty !");
          
          }else{

        const data = {
            labType:labType,
            assignedLabAssistant:assignedLabAssistant
        }

        console.log(data)

        axios.post("lab/lab/save",data).then((res) =>{
            if(res.data.success){
                alert("Create Successfully");
                this.setState(
                    {
                        labType:"",
                        assignedLabAssistant:""
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
           
            <div id="createlab" class="card-body bg-light">
            <div className="col-md-5 mx-auto"><br></br>
                <h1 class="text-center">Add New Laboratory</h1>
             
                    <form id="lab" className="createlabs" >
                        <div className="labtypes" style={{marginBottom:"35px"}}>

                            <label style={{marginBottom:'5px'}}>Lab Type</label>
                            <input type="text"
                            className="form-control"
                            name="labType"
                            placeholder="Enter Lab Type"
                            value={this.state.labType}
                            onChange={this.handleInputChange}/>
                        </div>
                        <div className="labassistants" style={{marginBottom:"25px"}}>
                            <label style={{marginBottom:'5px'}}>Lab Assistant</label>
                            <input type="text"
                            className="form-control"
                            name="assignedLabAssistant"
                            placeholder="Enter Lab Assistant"
                            value={this.state.assignedLabAssistant}
                            onChange={this.handleInputChange}/>
                        </div>

                        

                    </form>
                    <br></br>
                    <div class="d-grid gap-2 col-8 mx-auto">
                    <button className="btn btn-primary" type="submit" id="myBtn2" style={{marginTop:'1px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Save
                        </button>
                        </div>
            </div>

            </div>
            </div>
            
            
        )
    }
}