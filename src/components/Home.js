import React from 'react';
import learn from '../images/home.png'

const Home = () => {
    return (
        
        <section id="home" style={{paddingTop:"100px",paddingBottom:"110px"}}>
        <a href=" ">
            <img src={learn} alt=" " style={{width:"310px"}}></img>
        </a>
        
           <h2>
               ONE-STEP LEARNING PLATFORM FOR ALL YOUR FUTURE ENDEAVORS!
               
           </h2> 
           <a href=" "
                
               style={{
                   padding:"10px",
                   
                   color:"#6ca7f5",
                   
               }}
               >LEARN MORE..
           </a>
           
        </section>
    )
}

export default Home
