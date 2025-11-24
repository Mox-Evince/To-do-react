import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts/view")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mt-4">
      <h4 className="mb-3">View Posts</h4>
      <p>This is the posts view page where you can see all the posts.</p>
    </div>
  );
}
