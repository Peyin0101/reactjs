import React from "react";

export default function Task({ task, onRemove, onToggle }) {
  return (
    <div>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <button
        style={{ backgroundColor: task.completed ? "red" : "green" }}
        onClick={() => onToggle(task.id)}
      >
        {task.completed ? "Markeer als niet voltooid" : "Markeer als voltooid"}
      </button>
      <button onClick={() => onRemove(task.id)}>Verwijder</button>
    </div>
  );
}
