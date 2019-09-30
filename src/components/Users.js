import React, { Component } from "react";

function User(props) {
  return (
    <p>
      Resident: <b>{props.name}</b>
    </p>
  );
}

class UserPurpose extends Component {
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
          Have I found a purpose?{" "}
          <b>{this.state.active ? "OH YEAH!" : "Nope, not today"}</b>
        </p>
        <button onClick={this.toggle}>Found purpose?</button>
      </div>
    );
  }
}

function Users() {
  return (
    <main>
      <div>
        <User name="Princeton" />
        <UserPurpose />
        <User name="Kate Monster" />
        <UserPurpose />
        <User name="Nicky" />
        <UserPurpose />
        <User name="Rod" />
        <UserPurpose />
        <User name="Trekkie Monster" />
        <UserPurpose />
        <User name="Lucy" />
        <UserPurpose />
        <User name="The Bad Idea Bears" />
        <UserPurpose />
        <User name="Mrs. Lavinia Thistletwat" />
        <UserPurpose />
      </div>
    </main>
  );
}

export default Users;
