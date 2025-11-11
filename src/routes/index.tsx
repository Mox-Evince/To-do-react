import { Button, Container } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <Container className="d-flex">
        <Button variant="contained" className="mx-2" color="secondary">
          <Link
            to="/stopwatch"
            style={{ textDecoration: "none", color: "white" }}
          >
            Go to Stopwatch
          </Link>
        </Button>
        <Button variant="contained" className="mx-2" color="primary">
          <Link to="/posts" style={{ textDecoration: "none", color: "white" }}>
            Go to Posts
          </Link>
        </Button>
      </Container>
    </div>
  );
}
