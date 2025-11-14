import { Button, Container } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { sleep } from "../../utils/common";

export const Route = createFileRoute("/users/")({
  component: UserComponent,
  beforeLoad: async () => {
    {
      await sleep(2000);
    }
  },
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
      <Container>
        <Button variant="contained" className="mx-2" color="primary">
          <Link
            from="/users"
            to="./add/{-$id}"
            params={{}}
            style={{ textDecoration: "none", color: "white" }}
          >
            Add User
          </Link>
        </Button>
        <Button variant="contained" className="mx-2" color="warning">
          <Link
            from="/users"
            to="./view/$id"
            params={{ id: "123" }}
            style={{ textDecoration: "none", color: "white" }}
          >
            View User
          </Link>
        </Button>
      </Container>
    </div>
  );
}
