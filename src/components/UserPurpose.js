import React, { Component } from "react";

export default class UserPurpose extends Component {
  state = { active: false };

  toggle = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div>
        <p>
          Have I found a purpose?{" "}
          <b>{this.state.active ? "OH YEAH!" : "Nope, not today"}</b>
        </p>
        <button onClick={this.toggle}>Found purpose?</button>
      </div>
    );
  }
}
