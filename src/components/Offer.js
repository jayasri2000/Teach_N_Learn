import React from 'react';
import './Offer.css';
import dp from "../images/dp.jpg";
import hi from "../images/offer.png";

const Offer = () => {
    return (
        <section id="offer">
    
        <div className="content">
        <div className="container-fluid">
            <img src={hi} alt=" " style={{width:"200px" , paddingTop:"100px"}}></img>
            <h1>
           
             what do i have to offer?</h1>
            <h4>details about your course.</h4>
            <h4>subjects taught.</h4>
            <h4> materials and exams</h4>
            <h4>timings of your course.</h4>
            <h4>fees</h4>
            
        </div>
        
        
      </div>
    </section>
    )
}

export default Offer;
