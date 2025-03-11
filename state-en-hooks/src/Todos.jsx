import { useState } from "react";

export default function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "React leren", completed: false },
    { id: crypto.randomUUID(), text: "Naar de winkel gaan", completed: false },
  ]);

  const handleAddTodo = () => {
    const newTodo = { id: crypto.randomUUID(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDeleteTodo = (idToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  };

  const handleCompleteTodo = (idToComplete) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === idToComplete) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      })
    );
  };

  return (
    <div>
      <h1>Todos</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      Niet complete
      <ul>
        {todos
          .filter((item) => !item.completed)
          .map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleCompleteTodo(todo.id)}>
                Complete item
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>
                Delete item
              </button>
            </li>
          ))}
      </ul>
      Complete
      <ul>
        {todos
          .filter((item) => item.completed)
          .map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleCompleteTodo(todo.id)}>
                Complete item
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>
                Delete item
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
