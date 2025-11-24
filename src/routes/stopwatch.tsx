import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/stopwatch")({
  component: StopWatchComponent,
});

function StopWatchComponent() {
  const [now, setNow] = useState(0);
  const [startTime, setStarTime] = useState(0);

  const handleStart = () => {
    setStarTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      setNow(Date.now());
    }, 100);
  };

  const passedTime = (now - startTime) / 1000;
  return (
    <div className="container mt-4">
      <h3 className="mb-3"> {passedTime.toFixed(3)} </h3>
      <button className="btn btn-primary" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
