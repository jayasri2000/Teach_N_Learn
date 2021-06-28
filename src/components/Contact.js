import React from 'react';
import diary from '../images/contact.png'


const Contact = () => {
    return (
        <section id="contact">
    
        <div className="content">
        <div className="container-fluid">
            <img src={diary} alt="hi" style={{width:"200px" , paddingTop:"100px"}}></img>
            
            <p >
               
                <button className="btn-main-offer" href="mailto: jayasri.dey9@gmail.com"style={{color:"#6ca7f5",backgroundColor:"#111", paddingLeft:"4REM",paddingRight:"4REM"}}> EMAIL</button>
            </p>
            <p>

                <button href=" "style={{color:"#6ca7f5",backgroundColor:"#111", paddingLeft:"2REM",paddingRight:"2REM"}}> +91 8637365259</button>
            </p>
        </div>
        
        
      </div>
       <div class="footer-copyright text-center py-3">© Website By: Jayasri Dey || Content By:Name
    
  </div>
   
    </section>
    )
}

export default Contact
