import React from 'react';
import "../styles/navBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReportIcon from "@mui/icons-material/Report";
import { NavLink } from "react-router-dom";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export default function NavBar() {

    return <div className="nav_main_container">
            <div className="nav_header">
                <p className="nav_heading_text">STAFF MANAGER</p>
            </div>

            <div className="nav_body">
                <NavLink to="/" className="link_styles">
                    <div className="nav_link_wrapper">
                        <DashboardIcon fontSize="small" style={{ marginLeft: "45px" }} />
                        <p className="nav_link clearfix">DASHBOARD</p>
                    </div>
                </NavLink>
            </div>
            <div className="nav_body">
                <NavLink to="/AddDocter" className="link_styles">
                    <div className="nav_link_wrapper">
                        <LocalHospitalIcon fontSize="small" style={{ marginLeft: "45px" }} />
                        <p className="nav_link clearfix">ADD DOCTOR</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">
                <NavLink to="/DoctorView" className="link_styles">
                    <div className="nav_link_wrapper">
                        <AutorenewIcon fontSize="small" style={{ marginLeft: "45px" }} />
                        <p className="nav_link clearfix">VIEW DOCTOR DETAILS</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">             
                <NavLink to="/AddNurse" className="link_styles">
                    <div className="nav_link_wrapper">
                        <DepartureBoardIcon
                        fontSize="small"
                        style={{ marginLeft: "45px" }}
                        />
                        <p className="nav_link clearfix">ADD NURSE</p>
                    </div>
                </NavLink>
            </div>
            
            <div className="nav_body ">
                <NavLink to="/NurseView" className="link_styles">
                    <div className="nav_link_wrapper">
                        <DepartureBoardIcon
                        fontSize="small"
                        style={{ marginLeft: "45px" }}
                        />
                        <p className="nav_link clearfix">VIEW NURSE DETAILS</p>
                    </div>
                </NavLink>
            </div>

           
        </div>

}

<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#6FA8FF"}}>

<div className="container-fluid">
    
        <a className="navbar-brand" href="/">APPOINTMENT MANAGEMENT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav nav-tabs">
            <div className="nav justify-content-end">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/add" className="nav-link">''</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className="nav-link">'''</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">''</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className="nav-link">''</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</div>    


</nav>