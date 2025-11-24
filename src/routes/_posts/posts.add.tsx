import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts/posts/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mt-4">
      <button className="btn btn-primary">
        Add Post
      </button>
    </div>
  );
}
