import React from "react";

export default function Taskfilters({ setFilter, filter }) {
  return (
    <div>
      <button
        className="taskfilter"
        style={{
          background: filter === "all" ? "blue" : "lightgrey",
          color: filter === "all" ? "white" : "grey",
        }}
        onClick={() => setFilter("all")}
      >
        Alle taken
      </button>
      <button
        className="taskfilter"
        style={{
          background: filter === "completed" ? "green" : "lightgrey",
          color: filter === "completed" ? "white" : "grey",
        }}
        onClick={() => setFilter("completed")}
      >
        Voltooide taken
      </button>
      <button
        className="taskfilter"
        style={{
          background: filter === "incomplete" ? "red" : "lightgrey",
          color: filter === "incomplete" ? "white" : "grey",
        }}
        onClick={() => setFilter("incomplete")}
      >
        Niet voltooide taken
      </button>
    </div>
  );
}
