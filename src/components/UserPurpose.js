import React, { Component } from "react";

export default class UserPurpose extends Component {
  state = { active: true };

  toggle = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div>
        <p>
          has found his or her purpose:{" "}
          <b>
            {this.state.active
              ? "YEAH!"
              : "I have no idea what I want to do with my life"}
          </b>
        </p>
        <button onClick={this.toggle}>Found purpose?</button>
      </div>
    );
  }
}
