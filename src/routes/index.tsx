import { createFileRoute, MatchRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
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
