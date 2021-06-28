import React from 'react';
import book from '../images/books.png'
import ReactPlayer from 'react-player'
import movie from '../images/movie.mp4';
import './Content.css'
import '../index.css'

const Content = () => {
    return (
        <section id="content">
    
        <div className="content">
        <div className="container-fluid"  style={{alignContent:"center"}}>
            <img src={book} alt=" " style={{width:"180px" , paddingTop:"100px"}}></img>
            <h1>
             Sample Lecture
            </h1>
            <div className="center-div">

             <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url={movie}
            style={{paddingLeft:"23%"}}
            width='55%'
            height='55%%'
            controls = {true}

            />
         

        </div>
            </div>
            
        </div>
        
        
      </div>
    </section>
    )
}

export default Content
