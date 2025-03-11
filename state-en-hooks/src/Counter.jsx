import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count <= 0 ? 0 : count - 1);
  const reset = () => setCount(0);

  const canDecrement = count > 0;
  const canIncrement = count < 100000000;

  return (
    <div>
      <h1>HOW GAY IS IDRIS COUNTER</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button disabled={count <= 0} onClick={decrement}>
        Decrement
      </button>
      <button disabled={count == 0} onClick={reset}>
        Reset
      </button>
    </div>
  );
}
