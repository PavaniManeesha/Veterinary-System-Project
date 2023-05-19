import React, { useState, useEffect } from "react";
import axois from "axios";
import NavBar from "./PetNavBar";
import { Link, useParams} from "react-router-dom";
import "../styles/navBar.css";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/retrieveTable.css";


export default function Pet() {
    
    const [post, setprofile] = useState([]);
    const {petid} = useParams();

    useEffect(() => {
        function getProfile() {
       
          axois.get(`http://localhost:8000/profile/profiles/`)
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
            .delete(`http://localhost:8000/profile/profiles/delete/${post._id}`)
            .then((res) => {})
            .catch((post) => {
              alert(post);
            });
        } else {
          post.preventDefault();
        }
      };
      const [serQuary,setSerQuary]=useState("");

  function searchProfile(event){
        
        setSerQuary(event.target.value);

  }

  
  return (
    <div className="main-container">

        <NavBar />
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                       PET PROFILES
                    </h3>
                </div>
                
                <div className="order-section-one-right">
                    <input onChange={searchProfile} type="search" placeholder="Search" className="search-box" />
                </div>
                
                
            </div>

            <div className="order-section-two-container">   
             
                <table Class = "table">
                    <thead id="app-table">

                        <tr id="petT">

                           <th className="order-table-header-col-1" scope="col">#</th>
                            
                            <th className="order-table-header-col-1" scope="col">Pet Owner Name</th>
                            <th className="order-table-header-col-1" scope="col">Pet Name</th>
                            <th className="order-table-header-col-1" scope="col">Pet Type</th>
                            <th className="order-table-header-col-1" scope="col">Action</th>
                          
                            
                        </tr>

                    </thead>

                    <tbody>
                    {post.filter(post => 

                        post.pet_owner_name.includes(serQuary) ||
                        post.pet_owner_name.toLowerCase().includes(serQuary)
                    ).map((post, index) =>(
                       
                            <tr className="order-table-row" id="petT">
                              
                           <th className="order-table-col-1" scope="row">{index+1}</th>
                           
                           
                            <td className="order-table-col-1">
                              <a href={'/ViewProfile/'+post._id}>
                                {post.pet_owner_name}
                              </a>
                            </td>

                            
                            <td className="order-table-col-1">{post.pet_name}</td>
                            <td className="order-table-col-1">{post.pet_Type}</td>
                           
                       
                            <td id="action-button">
                              <a href={"/UpdateProfile/"+post._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
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
