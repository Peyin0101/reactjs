import { useState } from "react";
import ColorSlider from "./ColorSlider";

export default function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleRedChange = (e) => {
    setRed(e.target.value);
  };
  const handleGreenChange = (e) => {
    setGreen(e.target.value);
  };
  const handleBlueChange = (e) => {
    setBlue(e.target.value);
  };
  return (
    <div className="kleurkiezer-container">
      <h1>Kleurkiezer</h1>
      <ColorSlider
        color="Rood"
        value={red}
        onChange={handleRedChange}
        colorCode="red"
      />
      <ColorSlider
        color="Groen"
        value={green}
        onChange={handleGreenChange}
        colorCode="green"
      />
      <ColorSlider
        color="Blauw"
        value={blue}
        onChange={handleBlueChange}
        colorCode="blue"
      />
      <div
        style={{
          marginTop: "20px",
          width: "250px",
          height: "250px",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
      <p
        style={{ fontSize: "1.5rem", textAlign: "center", paddingTop: "80px" }}
      >
        rgb({red}, {green}, {blue})
      </p>
    </div>
  );
}
