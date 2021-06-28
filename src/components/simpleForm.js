import React, { Component } from "react";

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    console.log(this.state)
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <div>
          <label>
           ID:{"  "}
            <input
              name="fname"
              type="text"
              value={this.state.fname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        
        
        <div>
        <p>
            <button onClick={this.onSubmitForm}>Submit</button>

        </p>
           
        </div>
      </div>
    );
  }
}

export default SimpleForm;