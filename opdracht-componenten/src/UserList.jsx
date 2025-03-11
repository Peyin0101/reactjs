import React from "react";
import UserCard from "./UserCard";
import Badge from "./Badge";

function UserList({ users }) {
  return (
    <div className="userlist">
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email}>
          <Badge role={user.role} />
        </UserCard>
      ))}
    </div>
  );
}

export default UserList;
