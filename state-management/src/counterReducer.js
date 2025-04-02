// export default function counterReducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state > 0 ? state - 1 : 0;
//     case "reset":
//       return 0;
//     default:
//       return state;
//   }
// }

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

export default function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT: {
      const newCount = state.count - 1;
      return { count: newCount < 0 ? 0 : newCount };
    }
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });
export const resetAction = () => ({ type: RESET });
