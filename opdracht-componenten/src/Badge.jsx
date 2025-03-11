import React from "react";

function Badge({ role }) {
  let badgecolor;
  switch (role) {
    case "Admin":
      badgecolor = "red";
      break;
    case "Editor":
      badgecolor = "blue";
      break;
    case "Bezoeker":
      badgecolor = "green";
      break;
    default:
      badgecolor = "gray";
  }
  return (
    <span
      style={{
        backgroundColor: badgecolor,
        borderRadius: "5px",
        color: "white",
        padding: "5px",
      }}
    >
      {role}
    </span>
  );
}

export default Badge;
