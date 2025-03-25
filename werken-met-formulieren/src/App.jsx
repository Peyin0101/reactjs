import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ControlledInputsStart from "./ControlledInputsStart";
import UncontrolledInputsStart from "./UncontrolledInputsStart";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <ControlledInputsStart /> */}
        <UncontrolledInputsStart />
      </div>
    </>
  );
}

export default App;
