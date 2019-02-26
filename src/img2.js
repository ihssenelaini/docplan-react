import React from 'react'
import './App.css'


const Img2=()=>{
    return(
        <div className='img-container'>
           <div className="row">
                     
                     <div className="col-lg-4 europe">
                         <div className="warsaw">
                            <img src="https://www.docplanner.com/images/warsaw.png"/>   
                            <h5>warsaw</h5>                     
                            <button type="button" class="btn btn-primary btn-lg">see openings</button>
                         </div>
                         <div className="barcelona">
                            <img src="https://www.docplanner.com/images/barcelona.png"/>
                            <h5>barcelona</h5>
                             <button type="button" class="btn btn-primary btn-lg">see openings</button>
                        </div>
                        
                          
                  </div>
             
                   
                   <div class="col-lg-4 america">
                   <div className="istanbul">
                             <img src="https://www.docplanner.com/images/istanbul.png"/>
                             <h5>istanbul</h5>
                             <button type="button" class="btn btn-primary btn-lg">see openings</button>
                          </div>
                          <div className="rome">
                              <img src="https://www.docplanner.com/images/rome.png"/>
                              <h5>rome</h5>
                              <button type="button" class="btn btn-primary btn-lg">see openings</button>
                          </div>
                          </div>
                          <div class="col-lg-4 america">
                          <div class="mexico-city">
                              <img src="https://www.docplanner.com/images/mexico-city.png"/>
                              <h5>mexico city</h5>
                              <button type="button" class="btn btn-primary btn-lg">see openings</button>
                          </div>

                          <div class="curitiba">
                              <img src="https://www.docplanner.com/images/curitiba.png"/>
                              <h5>curitiba</h5>
                              <button type="button" class="btn btn-primary btn-lg">see openings</button>

                          </div>
                          
                      </div>
        
        
         </div>
        
        </div>
    )
};
export default Img2;