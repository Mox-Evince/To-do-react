import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts/posts_/edit/$postid")({
  component: EditPostComponent,
});

function EditPostComponent() {
  return (
    <div className="container mt-4">
      <h4 className="mb-3">Edit Post</h4>
      <p>This is the edit post page where you can modify your post.</p>

      <Link to="/users" className="btn btn-outline-primary">
        Go to users
      </Link>
    </div>
  );
}
