import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  //if USERS is empty
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found!</h2>
      </div>
    );
  }

  //if USERS is not empty
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
