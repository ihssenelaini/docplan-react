import React, { Component } from 'react';
import './App.css'


class Box extends Component {
    render() {
        const {box}=this.props
        return(
           <div className="box-contain col-lg-6">
                    
                        <img src={box.img}/>
                        <p>{box.paragraphe}</p>
                        <h4>{box.name}</h4>
            </div>


        
        )
        
    }
};
export default Box;
