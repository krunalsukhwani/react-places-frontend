import React from "react";

import "./Users.css";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Hunain",
      image:
        "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
