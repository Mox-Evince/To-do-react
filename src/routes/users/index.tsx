import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { sleep } from "../../utils/common";

export const Route = createFileRoute("/users/")({
  component: UserComponent,
  beforeLoad: async () => {
    {
      await sleep(0);
    }
  },
  loader: async () => {
    await sleep(500);
    const users = [
      {
        name: "Mox",
        tech: "React, Angular, Node",
        exp: 5,
      },
    ];

    return users;
  },
});

function UserComponent() {
  const ref = useRef(0);

  const [count, setCount] = useState(0);

  const users = Route.useLoaderData();

  console.log(users);

  const handleClick = () => {
    ref.current += 1;
  };
  return (
    <div className="container mt-4">
      <div className="mb-3">
        <button
          className="btn btn-outline-secondary me-2"
          onClick={handleClick}
        >
          use ref {ref.current}
        </button>
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => setCount((p) => p + 1)}
        >
          <small>Click to update ref count</small>
        </button>
        <span> use state : {count + "\n"}</span>
      </div>
      <div className="d-flex">
        <Link
          from="/users"
          to="./add/{-$id}"
          params={{}}
          className="btn btn-primary mx-2 text-white text-decoration-none"
        >
          Add User
        </Link>
        <Link
          from="/users"
          to="./add/{-$id}"
          params={{ id: "1" }}
          mask={{
            to: "/users/update" as "/users/add/{-$id}",
            params: { id: "1" },
          }}
          className="btn btn-primary mx-2 text-white text-decoration-none"
        >
          Update User
        </Link>
        <Link
          from="/users"
          to="./view/$id"
          params={{ id: "123" }}
          className="btn btn-warning mx-2 text-white text-decoration-none"
        >
          View User
        </Link>
      </div>
    </div>
  );
}
