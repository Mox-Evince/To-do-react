import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="container mt-3">
        <Link
          from="/posts"
          to="./add"
          className="btn btn-secondary mx-2 text-white text-decoration-none"
        >
          Add Post
        </Link>
      </div>
      <Outlet />
      <div className="card m-4 p-4 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Post 1</h2>
          <p className="card-text">This is the content of post 1.</p>
          <Link
            from="/posts"
            to="./edit/$postid"
            preloadDelay={2000}
            preload="intent"
            params={{ postid: "2" }}
            className="btn btn-primary text-white text-decoration-none"
          >
            Edit Post 1
          </Link>
        </div>
      </div>
    </div>
  );
}
