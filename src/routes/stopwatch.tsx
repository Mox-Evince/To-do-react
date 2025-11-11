import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

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
    <div>
      <Typography variant="h3"> {passedTime.toFixed(3)} </Typography>
      <Button variant="contained" onClick={handleStart}>
        Start
      </Button>
    </div>
  );
}
