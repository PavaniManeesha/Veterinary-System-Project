import React, { useState, useEffect } from "react";
import axois from "axios";
import NavBar from "./PetNavBar";
import { Link, useParams} from "react-router-dom";
import "../styles/navBar.css";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/retrieveTable.css";
import "../styles/pavani_css/ViewInquiries.css";


export default function Pet() {
    
    const [post, setprofile] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        function getProfile() {
       
          axois.get(`http://localhost:8000/inquiry/inquiries/`)
            .then((res) => {
              console.log(res.data);
              setprofile(res.data.existingPosts);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getProfile();
      }, []);
    
      // delete the somthin page is refresh
        // function refreshPage(){
        //   window.location.reload(false);
        // }
        
    
      //delete data
      const deleteData = (post) => {
        var result = window.confirm("Do you wont to Delete?");
    
        if (result == true) {
          axois
            .delete(`http://localhost:8000/inquiry/inquiries/delete/${post._id}`)
            .then((res) => {})
            .catch((post) => {
              alert(post);
            });
        } else {
          post.preventDefault();
        }
      };
      const [serQuary,setSerQuary]=useState("");

  function searchinquiry(event){
        
        setSerQuary(event.target.value);

  }

  
  return (
    <div className="main-container">

        <NavBar />
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                       INQUIRIES
                    </h3>
                </div>
                
                <div className="order-section-one-right">
                    <input onChange={searchinquiry} type="search" placeholder="Search" className="search-box" />
                </div>
                
                
            </div>

            <div className="order-section-two-container">   
             
                <table Class = "table">
                    <thead id="app-table">

                        <tr  id ="inq">

                           <th className="order-table-header-col-1" scope="col">Number</th>
                            <th className="order-table-header-col-1" scope="col">Pet ID</th>
                            <th className="order-table-header-col-1" scope="col">Pet Owner Name</th>
                            <th className="order-table-header-col-1" scope="col">E Mail</th>
                            <th className="order-table-header-col-1" scope="col">Inquiry</th>
                            <th className="order-table-header-col-1" scope="col">Action</th>
                          
                            
                        </tr>

                    </thead>

                    <tbody>
                    {post.filter(post => 

                        post.o_name.includes(serQuary) ||
                        post.o_name.toLowerCase().includes(serQuary)
                    ).map((post, index) =>(
                       
                            <tr className="order-table-row">
                              
                           <th className="order-table-col-1" scope="row">{index+1}</th>
                           
                           
                            <td className="order-table-col-1">{post._id}</td>

                            <td className="order-table-col-1">
                              {post.o_name}
                            </td>
                            <td className="order-table-col-1">
                              <a href="https://mail.google.com/mail/u/0/?dispatcher_command=master_lookup#inbox?compose=new">
                                {post.e_address}
                              </a>
                            </td>
                            <td className="order-table-col-1">{post.inquiry}</td>

                            <td id="action-button">
                              
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(post)}}>
                                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </button>
                              </a>
                            </td>

                         </tr>
                    ))}
                    </tbody>
                </table>
                
            </div>
            
        </div>
    </div>

    );
}
