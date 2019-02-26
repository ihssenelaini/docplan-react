import React, { Component } from 'react';
import './App.css'
import Box from'./box'
const Tab=[
{img:"https://www.docplanner.com/img/flag.png",
name:"Leader in 10 countries",
paragraphe:"Poland, Turkey, Spain, Italy, Czech Republ, Mexico, Brazil, Colombia, Argentina and Chile."},

{img:"https://www.docplanner.com/img/visits.png",
name:"1 million appointments",
paragraphe:"booked last month"} ,     

{img:"https://www.docplanner.com/img/patients.png",
name:"30 million unique patients",
paragraphe:"visit us every month" },

{img:"https://www.docplanner.com/img/doctors.png",
name:"2 million active doctors",
paragraphe:"trust in our solutions"}]


  


class ListBox extends Component {
    render() {
        return(
            <div className="list">
               <div className="row bloc1">
                            <div className="col-lg-6">
                                <div className ="healthcare">
                                    <h3>The world's<br/>
                                        biggest healthcare platform</h3>
                                    <p>We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries.</p> 
                                    <img src="html.png"className="img20"/>
                                </div>
                                </div>
                  
            {/* {Tab.map((el.index) =>{ <Box box={el} key={index}/>})} */}
            <div className="col-lg-6">
             {Tab.map((el,index)=>{  return <Box   box={el}  key={index}  />})}
                 </div>
             </div>
             </div>
        )
    }
}; 

export default ListBox;