import { createFileRoute, Link, useBlocker } from "@tanstack/react-router";

export const Route = createFileRoute("/users/add/{-$id}")({
  component: SaveUserComponent,
});

function SaveUserComponent() {
  const { id } = Route.useParams();
  const { proceed, reset, status } = useBlocker({
    shouldBlockFn: () => !!id,
    withResolver: true,
  });
  /*  useBlocker({
    shouldBlockFn: () => {
      console.log("Navigating awayyyyy");
      return !window.confirm(
        "The changes might not be saved. are you sure you want to leave?"
      );
    },
    withResolver: false,
  }); */

  console.log(id);
  return (
    <div className="container mt-4">
      <h4 className="mb-4">{id ? "Update" : "Add"} User</h4>
      <div className="my-4">
        <div className="d-flex flex-column gap-3">
          <div className="form-group">
            <label className="form-label">Enter name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label className="form-label">Enter mobile</label>
            <input type="text" className="form-control" placeholder="Enter mobile" />
          </div>
          <Link to="/users" className="btn btn-link">User!! Go Back</Link>
        </div>
      </div>
      {status === "blocked" && (
        <div className="alert alert-warning">
          <p>Are you sure you want to leave?</p>
          <button className="btn btn-danger me-2" onClick={proceed}>Yes</button>
          <button className="btn btn-secondary" onClick={reset}>No</button>
        </div>
      )}
    </div>
  );
}
