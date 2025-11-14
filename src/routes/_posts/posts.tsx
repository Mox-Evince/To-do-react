import { Button, Card, CardContent, Container } from "@mui/material";
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
            from="/posts"
            to="./add"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add Post
          </Link>
        </Button>
      </Container>
      <Outlet />
      <Card className="m-4 p-4">
        <h2>Post 1</h2>
        <p>This is the content of post 1.</p>
        <CardContent>
          <Button variant="contained" color="primary">
            <Link
              from="/posts"
              to="./edit/$postid"
              preloadDelay={2000}
              preload="intent"
              params={{ postid: "2" }}
              style={{ textDecoration: "none", color: "white" }}
            >
              Edit Post 1
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
