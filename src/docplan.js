import React, { Component } from 'react';

import './App.css';



class Doc extends Component {
    render() {
      return (
        <div className="container-fluid">
         <h1 style={{textAlign:"center",color: "aquamarine",marginBottom:"10%"}}>Making the healthcare experience more human</h1>
        
        <div className="row">
            <div className="col-md-6">
               <p>We want patients to find the perfect doctor and book an<br/> appointment in the most easy way. The patient journey should be<br/> enjoyable, and that's why we are always next to them: to help them<br/> find the best possible care. Anytime, anywhere.</p>
            </div>
             <div className="col-md-6">
                <p>We also help doctors to better manage their<br/>practice and build their online reputation. With our integrated end-to-end solution, doctors<br/> are able not only to improve their online presence, but also to devote their time to<br/> what really matters: their patients</p>
              </div>
         </div>
        </div>
      );
    }
  }
  
  export default Doc;