import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleAddClick = () => {
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName("");
    }
  };

  return (
    <div>
      <input
        className="taskinput"
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="Nieuwe taak"
      />
      <button
        onClick={handleAddClick}
        disabled={!taskName.trim()}
        style={{
          backgroundColor: !taskName.trim() ? "lightgrey" : "blue",
          color: !taskName.trim() ? "grey" : "white",
        }}
      >
        Toevoegen
      </button>
    </div>
  );
}
