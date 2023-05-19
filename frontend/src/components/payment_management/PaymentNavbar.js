import React from 'react';
import "../styles/navBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RateReviewIcon from '@mui/icons-material/RateReview';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import { NavLink } from "react-router-dom";

export default function PaymentNavbar() {

    return <div className="nav_main_container">
            <div className="nav_header">
                <img href="../../public/images/Logo01.png"></img>
                <p className="nav_heading_text">PAYMENT MANAGEMENT</p>
            </div>

            <div className="nav_body">
                <NavLink to="/" className="link_styles">
                    <div className="nav_link_wrapper">
                        <DashboardIcon fontSize="small" style={{ marginLeft: "12px"}} />
                        <p className="nav_link clearfix" style={{ marginRight: "12px"}}>Dashboard</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">
                <NavLink to="/add-payment" className="link_styles">
                    <div className="nav_link_wrapper">
                        <AddBoxIcon fontSize="small" style={{ marginLeft: "12px"}} />
                        <p className="nav_link clearfix" style={{ marginRight: "12px"}}>ADD PAYMENT</p>
                    </div>
                </NavLink>
            </div>
        
            <div className="nav_body ">             
                <NavLink to="/display-payment" className="link_styles">
                    <div className="nav_link_wrapper">
                        <RateReviewIcon fontSize="small" style={{ marginLeft: "12px"}}/>
                        <p className="nav_link clearfix" style={{ marginRight: "12px"}}>DISPLAY PAYMENT</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">             
                <NavLink to="/daily-payment" className="link_styles">
                    <div className="nav_link_wrapper">
                        <DesktopMacIcon fontSize="small" style={{ marginLeft: "12px"}}/>
                        <p className="nav_link clearfix" style={{ marginRight: "12px"}}>DAILY PAYMENT</p>
                    </div>
                </NavLink>
            </div>
        </div>
}