import React from 'react';
import fire from '../Requirements/Fire'

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <div style={{color:"#6ca7f5"}}>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div style={{color:"#6ca7f5"}}>Password</div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <button style={{margin: '10px',padding:"12px",color:"#6ca7f5",backgroundColor:"#111"}} onClick={this.login}>Login</button>
        <button style={{margin: '10px',padding:"12px",color:"#6ca7f5",backgroundColor:"#111"}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Login;