import React,{component}from 'react';
import './text1.css'



const Text1=()=>{
    return(
<div className="text-container">


<div className="row">
                                <div className="col-lg-4">
                                          <div className="small-text">
                                               <h3>We are a global<br/> company<br/>with local culture.</h3>
                                          </div>
                                </div>
                                    
                                           
                                        <div className="col-lg-2 no-lines">
                                                <a className="line"href="#">znanyLekarz</a>
                                                <a className="line5"href="#">ZnamyLekar </a>
                                        </div>
                                                   
                                            <div className="col-lg-2">
                                                <a className="line"href="#">doctoralia</a>
                                            </div>

                                             <div className="col-lg-2">
                                                    <a className="line"href="#">MioDottore</a>
                                             </div>
                                             
                                             <div className="col-lg-2">
                                                    <a className="line"href="#">DoktorTakvimi</a>
                                             </div>

</div>
</div>
    );
}
export default Text1;