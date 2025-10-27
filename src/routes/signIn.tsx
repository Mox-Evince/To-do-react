import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signIn")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Sign In</div>;
}
