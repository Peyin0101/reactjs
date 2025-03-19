import Counter from "./Counter";
import Login from "./Login";
import Todos from "./Todos";
import Deelnemers from "./Deelnemers";
import ColorPicker from "./ColorPicker";
import WindowSize from "./Windowsize";
import Timer from "./Timer";
import VisitTimer from "./VisitTimer";

export default function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Login /> */}
      <Todos />
      <Deelnemers />
      <ColorPicker />
      <WindowSize />
      <Timer />
      <VisitTimer />
    </div>
  );
}
