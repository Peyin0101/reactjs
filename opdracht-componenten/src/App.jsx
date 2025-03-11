import React from "react";
import UserList from "./UserList";

function App() {
  const users = [
    { id: 1, name: "Idris Gay", email: "idrisgay@gay.be", role: "Admin" },
    {
      id: 2,
      name: "Warre Pussy",
      email: "warre@pussyplay.com",
      role: "Editor",
    },
    {
      id: 3,
      name: "Kevin Rugridder",
      email: "kevinrugridder@analintruder.com",
      role: "Bezoeker",
    },
  ];
  return (
    <div className="app">
      <h1>Gebruikerslijst</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
