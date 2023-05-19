import React from 'react';
import "../styles/navBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';import SummarizeIcon from '@mui/icons-material/Summarize';
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return <div className="nav_main_container">
            <div className="nav_header">
                <p className="nav_heading_text">Pharmacy Management</p>
            </div>

            <div className="nav_body">
                <NavLink to="/" className="link_styles">
                    <div className="nav_link_wrapper">
                        <DashboardIcon fontSize="small" style={{ marginLeft: "45px" }} />
                        <p className="nav_link clearfix">Dashboard</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">
                <NavLink to="/addMedicine" className="link_styles">
                    <div className="nav_link_wrapper">
                        <LocalHospitalIcon fontSize="small" style={{ marginLeft: "45px" }} />
                        <p className="nav_link clearfix">Add Medicine</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">             
                <NavLink to="/medicineDetails" className="link_styles">
                    <div className="nav_link_wrapper">
                    <VaccinesIcon fontSize="small" style={{ marginLeft: "45px" }} />
                        <p className="nav_link clearfix">Medicine Details</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">
                <NavLink to="/buyer/addRequest" className="link_styles">
                    <div className="nav_link_wrapper">
                        <NoteAddIcon fontSize="small" style={{ marginLeft: "45px" }}/>
                        <p className="nav_link clearfix">Buyer Request</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">
                <NavLink to="/View_Request" className="link_styles">
                    <div className="nav_link_wrapper">
                        <DescriptionIcon fontSize="small" style={{ marginLeft: "45px" }}/>
                        <p className="nav_link clearfix">View Request</p>
                    </div>
                </NavLink>
            </div>
            
            
            <div className="nav_body ">
                <NavLink to="/prescription" className="link_styles">
                    <div className="nav_link_wrapper">
                        <DocumentScannerIcon fontSize="small" style={{ marginLeft: "45px" }}/>
                        <p className="nav_link clearfix">View Prescription</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">
                <NavLink to="/PharmacyReport" className="link_styles">
                    <div className="nav_link_wrapper">
                        <SummarizeIcon fontSize="small" style={{ marginLeft: "45px" }}/>
                        <p className="nav_link clearfix">Pharmacy Reports</p>
                    </div>
                </NavLink>
            </div>
        </div>

}
        
