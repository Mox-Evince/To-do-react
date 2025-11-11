import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute("/users/")({
  component: UserComponent,
});

function UserComponent() {
  const ref = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    ref.current += 1;
  };
  return (
    <div>
      <button onClick={handleClick}>use ref {ref.current}</button>
      <button onClick={() => setCount((p) => p + 1)}>
        <small>Click to update ref count</small>
      </button>
      <span> use state : {count + "\n"}</span>
    </div>
  );
}
