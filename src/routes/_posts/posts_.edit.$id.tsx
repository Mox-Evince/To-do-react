import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts/posts_/edit/$id")({
  component: EditPostComponent,
});

function EditPostComponent() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Edit Post
      </Typography>
      <Typography variant="body1">
        This is the edit post page where you can modify your post.
      </Typography>
    </div>
  );
}
