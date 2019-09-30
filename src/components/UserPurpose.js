import React, { Component } from "react";

export default class UserPurpose extends Component {
  state = { active: false };

  toggle = () => {
    this.setState({
      active: !this.state.active // set to true of false if I don't wanna change it back
    });
  };

  render() {
    return (
      <div>
        <p>
          <b>Have I found a purpose? </b>
          this.state.active ? "OH YEAH!" : "Nope, not today"}
        </p>
        <button onClick={this.toggle}>Found purpose?</button>
      </div>
    );
  }
}
