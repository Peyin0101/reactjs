import { useEffect, useState } from "react";

export default function VisitTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <h1 className="timercolor2">
      Je bent <span className="secondscolor">{seconds}</span> seconden op deze
      pagina!
    </h1>
  );
}
