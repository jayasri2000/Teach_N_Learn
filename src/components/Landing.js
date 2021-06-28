import React from 'react';
import fire from '../Requirements/Fire';

class Landing extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>You Are Logged In</h1>
        <p>

        <a href=" "> Video Lectures{" "}</a>
        </p>
        <p>

        <a href=" ">Topics Covered{" "}</a>
        </p>
        <p>

        <a Href=" ">Join Classroom{" "}</a>
        </p>
        <p>
        <button onClick = {this.logout}>Logout</button>

        </p>
      </div>
    )
  }
}

export default Landing;