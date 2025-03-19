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
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="Nieuwe taak"
      />
      <button onClick={handleAddClick} disabled={!taskName.trim()}>
        Toevoegen
      </button>
    </div>
  );
}
