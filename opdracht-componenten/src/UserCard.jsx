import React from "react";
import Badge from "./Badge";

function UserCard({ name, email, children }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <div>{children}</div>
    </div>
  );
}

export default UserCard;
