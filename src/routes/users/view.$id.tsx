import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/view/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mt-4">
      <div className="card m-4 p-4 shadow-sm">
        <div className="card-header bg-white border-bottom-0">
          <h5 className="mb-0">User Details</h5>
        </div>

        <div className="card-body">
          <h4 className="card-title">Mox Shah</h4>
          <h6 className="card-subtitle mb-2 text-muted">Full Stack developer</h6>
        </div>
        <div className="card-footer bg-white border-top-0 d-flex justify-content-center">
          <Link
            from="/users"
            to="./add/{-$id}"
            params={{}}
            className="btn btn-primary mx-2 text-white text-decoration-none"
          >
            Add User
          </Link>
        </div>
      </div>
    </div>
  );
}
