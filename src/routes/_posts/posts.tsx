import { Button, Container } from "@mui/material";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_posts/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Container>
        <Button variant="contained" className="mx-2" color="secondary">
          <Link
            to="/posts/add"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add Post
          </Link>
        </Button>
      </Container>
      <Outlet />
      Posts Listing
    </div>
  );
}
