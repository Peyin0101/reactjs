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
    case "Visitor":
      badgecolor = "green";
      break;
    default:
      badgecolor = "gray";
  }
}
