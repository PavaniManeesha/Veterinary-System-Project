import React from 'react';
import "../styles/navBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return <div className="nav_main_container">
            <div className="nav_header">
                <p className="nav_heading_text">APPOINTMENTS MANAGER</p>
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
                <NavLink to="/add" className="link_styles">
                    <div className="nav_link_wrapper">
                        <AddCircleIcon fontSize="small" style={{ marginLeft: "45px" }} />
                        <p className="nav_link clearfix">MAKE APPOINTMENT</p>
                    </div>
                </NavLink>
            </div>
        
            <div className="nav_body ">             
                <NavLink to="/all" className="link_styles">
                    <div className="nav_link_wrapper">
                        <CalendarMonthIcon
                        fontSize="small"
                        style={{ marginLeft: "45px" }}
                        />
                        <p className="nav_link clearfix">APPOINTMENTS</p>
                    </div>
                </NavLink>
            </div>
            
            <div className="nav_body ">
                <NavLink to="/dailyAppointments" className="link_styles">
                    <div className="nav_link_wrapper">
                        <CalendarTodayIcon
                        fontSize="small"
                        style={{ marginLeft: "45px" }}
                        />
                        <p className="nav_link clearfix">DAILY APPOINTMENTS</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">
                <NavLink to="/checkedInAppointments" className="link_styles">
                    <div className="nav_link_wrapper">
                        <AssignmentTurnedInIcon
                            fontSize="small"
                            style={{ marginLeft: "45px" }}
                        />
                        <p className="nav_link clearfix">CHECKED IN APPOINTMENTS</p>
                    </div>
                </NavLink>
            </div>

            <div className="nav_body ">
                <div className="nav_link_section ">
                    <InsertChartIcon fontSize="small" />{" "}
                    <p className="nav_section_text">REPORTS</p>
                </div>

                <NavLink to="/Vaccinations" className="link_styles">
                    <div className="nav_link_wrapper">
                        <BarChartIcon
                            fontSize="small"
                            style={{ marginLeft: "45px" }}
                        />
                        <p className="nav_link clearfix">VACCINATION APPOINTMENTS</p>
                    </div>
                </NavLink>
            </div>

        </div>

}