import { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const toggleStyle = {
    backgroundColor: isOn ? "rgb(34, 197, 94)" : "rgb(209, 213, 219)",
  };

  const circleStyle = {
    transform: isOn ? "translateX(1.5rem)" : "translateX(0)",
  };

  return (
    <div className="grid h-250 place-content-center">
      <div
        style={toggleStyle}
        onClick={handleToggle}
        className={`relative w-14 h-8 flex items-center rounded-full cursor-pointer p-1 transition-colors duration-300 ease-in-out`}
      >
        <div
          style={circleStyle}
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
        ></div>
      </div>
    </div>
  );
}
