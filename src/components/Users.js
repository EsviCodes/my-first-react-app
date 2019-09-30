import React, { Component } from "react";

function User(props) {
  return (
    <p>
      "User: "<b>{props.name}</b>
    </p>
  );
}

function Users() {
  return (
    <main>
      <div>
        <User name="Kate Monster" />
        <User name="Rodd" />
        <User name="Nicky" />
      </div>
    </main>
  );
}

export default Users;
