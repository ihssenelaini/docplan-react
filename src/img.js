import React, { Component } from 'react';
import './img.css';



const Img=() =>{
    return(

    <div className="first-image">


<div className="container">
  <div className="row">
    <div className="col col-6">
    <div className="patients">
                                       
                                          <h6>For patients</h6>
                                         <h2>Find a doctor, book a visit and solve any health-related doubt</h2>
                                          <button type="button" className="btn btn-primary btn-lg">choose country</button>
                                            
                                        
                                    <img className="profile" style={{overFlow:"hidden",
    marginLeft:" 15%" }}src ="https://www.docplanner.com/img/screen-marketplace@2x.png"/>                                           
                    </div>
    </div>
    <div className="col col-6">
    <div className="doctors">
                                       
                                        <h6>For doctors</h6>
                                        <h2>Save time managing visits and<br/>cut no-shows by half</h2>
                                        
                                    <img className="work" style={{overflow:"hidden",
    marginLeft: "15%",marginTop:"10%"}}src="https://www.docplanner.com/img/screen-saas@2x.png"/>
                                
                    </div> 
    </div>
  </div>
  </div>
        {/* <div row>
            <div col-md-6>
                    <div class="patients">
                                       <ul> 
                                         <li> <h6>For patients</h6></li>
                                         <li><h2>Find a doctor, book a visit and solve any health-related doubt</h2></li>
                                         <li> <button type="button" className="btn btn-primary btn-lg">choose country</button>
                                            </li>
                                        </ul>
                                    <img className="profile" src ="https://www.docplanner.com/img/screen-marketplace@2x.png"/>                                           
                    </div>
            </div>




                <div col-md-6>
                   <div class="doctors">
                                       <ul>
                                        <li> <h6>For doctors</h6></li>
                                        <li><h2>Save time managing visits and<br/>cut no-shows by half</h2></li>
                                        </ul>
                                    <img className="work"src="https://www.docplanner.com/img/screen-saas@2x.png"/>
                                
                    </div> 
              
                </div>
         </div>
 */}
    </div>   
         

        
        
    )
}
export default Img;