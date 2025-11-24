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
      <div className="container d-flex justify-content-center mt-5">
        <Link
          to="/stopwatch"
          className="btn btn-secondary mx-2 text-white text-decoration-none"
          search={{ time: "2000" }}
        >
          Go to Stopwatch
        </Link>
        <Link
          to="/posts"
          className="btn btn-primary mx-2 text-white text-decoration-none"
        >
          Go to Posts
        </Link>
        <Link
          to="/users"
          className="btn btn-success mx-2 text-white text-decoration-none"
        >
          Go to Users
        </Link>
        <button
          className="btn btn-warning mx-2 text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <MatchRoute to="/users" pending>
        {(isPending) =>
          isPending ? (
            <div className="d-flex justify-content-center mt-4">
              <span className="badge bg-dark text-light p-3"> Loading... </span>
            </div>
          ) : (
            ""
          )
        }
      </MatchRoute>
    </div>
  );
}
