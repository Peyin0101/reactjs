import React from "react";

export default function ({ setFilter, filter }) {
  return (
    <div>
      <button
        style={{ color: filter === "all" ? "blue" : "black" }}
        onClick={() => setFilter("all")}
      >
        Alle taken
      </button>
      <button
        style={{ color: filter === "completed" ? "green" : "black" }}
        onClick={() => setFilter("completed")}
      >
        Voltooide taken
      </button>
      <button
        style={{ color: filter === "incomplete" ? "red" : "black" }}
        onClick={() => setFilter("incomplete")}
      >
        Niet voltooide taken
      </button>
    </div>
  );
}
