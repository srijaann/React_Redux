import React, { Component } from "react";

export default class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Sign Up",
      description: "Enter your user name"
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({
      title: "Sign In",
      description: "Enter Your Password"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <button onClick={this.updateState}>Update State</button>
      </div>
    );
  }
}
