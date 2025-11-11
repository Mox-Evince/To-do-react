import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts")({
  component: PostsLayoutComponent,
});

function PostsLayoutComponent() {
  return (
    <div>
      <div className="post-layout">
        <Outlet />
      </div>
    </div>
  );
}
