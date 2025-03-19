import { useEffect, useState } from "react";

export default function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="wwcontainer">
      <h1 className="wwtitle">Window Width Tracker</h1>
      <div className="windowwidth">Current window width: {windowWidth}px</div>
    </div>
  );
}
