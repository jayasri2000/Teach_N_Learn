import React from 'react';
import './me.css';
import dp from '../images/dp.jpg';


const me = () => {
    return (
        <section id="profile">
    
        <div className="content">
        <div className="container-fluid">
            <img src={dp} alt=" " style={{width:"200px" , paddingTop:"100px"}}></img>
            <h1> HI THIS IS NAME SURNAME</h1>
            <h4>your intro,and designation</h4>
            <p >
                <a href=" " style={{color:"#6ca7f5"}}>Linked in</a>
            </p>
        </div>
        
        
      </div>
    </section>
           
          
             
             
           
    )
}

export default me
