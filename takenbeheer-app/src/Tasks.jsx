import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskFilters from "./TaskFilters";
import TaskList from "./TaskList";
import { useTasks } from "./useTasks";

export default function Tasks() {
  const [tasks, addTask, removeTask, toggleTaskStatus] = useTasks();
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div>
      <TaskInput onAdd={addTask} />
      <TaskFilters setFilter={setFilter} filter={filter} />
      <TaskList
        tasks={filteredTasks}
        onRemove={removeTask}
        onToggle={toggleTaskStatus}
      />
    </div>
  );
}
