import { Button } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts/posts/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Add Post
      </Button>
    </div>
  );
}
