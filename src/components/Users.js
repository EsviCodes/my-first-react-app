import React, { Component } from "react";

function User(props) {
  return (
    <p>
      Resident: <b>{props.name}</b>
    </p>
  );
}

function Users() {
  return (
    <main>
      <div>
        <User name="Princeton" />
        <User name="Kate Monster" />
        <User name="Nicky" />
        <User name="Rod" />
        <User name="Trekkie Monster" />
        <User name="Lucy" />
        <User name="The Bad Idea Bears" />
        <User name="Mrs. Lavinia Thistletwat" />
      </div>
    </main>
  );
}

export default Users;
