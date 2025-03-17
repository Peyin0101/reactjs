import React from "react";

function ColorSlider({ label, value, onChange }) {
  let color;

  if (label === "Rood") {
    color = `rgb(${value}, 0, 0)`;
  } else if (label === "Groen") {
    color = `rgb(0, ${value}, 0)`;
  } else if (label === "Blauw") {
    color = `rgb(0, 0, ${value})`;
  }

  return (
    <div>
      <label style={{ color: "rgb(255,0,0)" }} htmlFor={colorCode}>
        {color}
      </label>
      <input
        type="range"
        id={colorCode}
        name={colorCode}
        min="0"
        max="255"
        value={value}
        onChange={onChange}
      />
      <span>{value}</span>
    </div>
  );
}

export default ColorSlider;
