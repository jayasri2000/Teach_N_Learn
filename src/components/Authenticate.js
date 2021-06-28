import React,{Component} from  'react';
import hi from "../images/access.png";
import Login from './Login';
import fire from '../Requirements/Fire'

import Landing from './Landing';
class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  } 
  render(){
    return (
       <section id="login">
    
        <div className="content">
        <div className="container-fluid">
            <img src={hi} alt=" " style={{width:"200px" , paddingTop:"100px"}}></img>
            <h1>
           
             Access Your Content</h1>
            <h4>
             { this.state.user ? ( <Landing /> ) : ( <Login /> ) }

            </h4>
            
            
        </div>
        
        
      </div>
    </section>
    );
    }
}

export default Authenticate;
