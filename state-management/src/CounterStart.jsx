import { useReducer } from "react";
import counterReducer, {
  decrementAction,
  incrementAction,
  resetAction,
} from "./counterReducer";

// function Counter() {
//   const initialState = 0;
//   const [state, dispatch] = useReducer(counterReducer, initialState);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-3xl font-bold mb-6">Teller App</h1>
//       <p className="text-5xl font-semibold mb-4">{state}</p>
//       <div className="flex space-x-4">
//         <button
//           className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//           onClick={() => dispatch({ type: "increment" })}
//         >
//           +
//         </button>
//         <button
//           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//           onClick={() => dispatch({ type: "decrement" })}
//         >
//           -
//         </button>
//         <button
//           className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
//           onClick={() => dispatch({ type: "reset" })}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Counter;

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const handleIncrement = () => dispatch(incrementAction());
  const handleDecrement = () => dispatch(decrementAction());
  const handleReset = () => dispatch(resetAction());

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
