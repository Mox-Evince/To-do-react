import { Button, Container } from "@mui/material";
import {
  createFileRoute,
  Link,
  MatchRoute,
  useNavigate,
} from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate({ to: "/login" });
  };

  return (
    <div>
      <Container className="d-flex">
        <Button variant="contained" className="mx-2" color="secondary">
          <Link
            to="/stopwatch"
            style={{ textDecoration: "none", color: "white" }}
            search={{ time: "2000" }}
          >
            Go to Stopwatch
          </Link>
        </Button>
        <Button variant="contained" className="mx-2" color="primary">
          <Link to="/posts" style={{ textDecoration: "none", color: "white" }}>
            Go to Posts
          </Link>
        </Button>
        <Button variant="contained" className="mx-2" color="success">
          <Link to="/users" style={{ textDecoration: "none", color: "white" }}>
            Go to Users
          </Link>
        </Button>
        <Button
          variant="contained"
          className="mx-2"
          color="warning"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Container>
      <MatchRoute to="/users" pending>
        {(isPending) =>
          isPending ? (
            <span className="bg-dark text-light w-75 h-75"> Loading... </span>
          ) : (
            ""
          )
        }
      </MatchRoute>
    </div>
  );
}
