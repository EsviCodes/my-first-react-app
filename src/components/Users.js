import React from "react";
import UserPurpose from "./UserPurpose";

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
        {" "}
        {/*// enclosing element */}
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
