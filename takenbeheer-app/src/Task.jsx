import React from "react";

export default function Task({ task, onRemove, onToggle }) {
  return (
    <div
      className="fulltaskcontainer"
      style={{
        backgroundColor: task.completed ? "#c22e2e" : "#3ebb31",
      }}
    >
      <span
        style={{
          fontSize: "1.1em",
          textDecoration: task.completed ? "line-through" : "none",
          textDecorationColor: task.completed ? "red" : "green",
          color: task.completed ? "red" : "green",
          padding: "10px",
          margin: "5px",
          fontWeight: "bold",
          backgroundColor: "#efefef",
          borderRadius: "5px",
        }}
      >
        {task.name}
      </span>
      <div className="taskcontainer">
        <button
          style={{
            backgroundColor: task.completed ? "red" : "green",
            color: task.completed ? "black" : "white",
            marginRight: "15px",
            marginLeft: "15px",
          }}
          onClick={() => onToggle(task.id)}
        >
          {task.completed
            ? "Markeer als niet voltooid"
            : "Markeer als voltooid"}
        </button>
        <button className="deletebtn" onClick={() => onRemove(task.id)}>
          Verwijder
        </button>
      </div>
    </div>
  );
}
