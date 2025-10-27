import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/post/{-$id}")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  console.log(data);
  return (
    <div>
      View Post
      <Link to="." params={{ id: "123" }}>
        Go to Post
      </Link>
      <Link to="..">Go Back</Link>
    </div>
  );
}
