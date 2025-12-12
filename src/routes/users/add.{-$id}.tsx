import { useCallback, useState } from "react";
import { createFileRoute, Link, useBlocker } from "@tanstack/react-router";

export const Route = createFileRoute("/users/add/{-$id}")({
  component: SaveUserComponent,
});

function SaveUserComponent() {
  // Route params shape can vary; try common keys first and fall back to raw params
  const params = Route.useParams() as
    | Record<string, string | undefined>
    | undefined;
  const id = params?.id ?? params?.["-$id"] ?? undefined;

  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");

  // Consider the form dirty if any field has a non-empty value
  const isDirty = Boolean(name.trim() || mobile.trim());

  const { proceed, reset, status } = useBlocker({
    shouldBlockFn: () => isDirty,
    withResolver: true,
  });

  const handleSave = useCallback(() => {
    // TODO: replace with real save logic (API call + navigation)
    // For now, clear the form to mark it as not dirty
    setName("");
    setMobile("");
  }, []);

  const handleReset = useCallback(() => {
    // reset dialog action — same as the blocker reset helper
    reset?.();
  }, [reset]);

  return (
    <div className="container mt-4">
      <h4 className="mb-4">{id ? "Update" : "Add"} User</h4>

      <div className="my-4">
        <div className="d-flex flex-column gap-3">
          <div className="form-group">
            <label className="form-label">Enter name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Enter mobile</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
            <Link to="/users" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </div>
      </div>

      {status === "blocked" && (
        <div className="alert alert-warning">
          <p>There are unsaved changes. Are you sure you want to leave?</p>
          <div className="d-flex">
            <button
              className="btn btn-danger me-2"
              onClick={() => {
                // proceed resolves the blocker and allows navigation
                proceed?.();
              }}
            >
              Yes, leave
            </button>
            <button className="btn btn-secondary" onClick={handleReset}>
              No, stay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
