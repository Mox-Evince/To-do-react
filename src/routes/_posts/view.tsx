import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts/view")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        View Posts
      </Typography>
      <Typography variant="body1">
        This is the posts view page where you can see all the posts.
      </Typography>
    </div>
  );
}
