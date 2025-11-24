import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { sleep } from "../utils/common";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // used async await here just to simulate delay but it's totally optional
    await auth.login("demoUser");
    await sleep(500);
    await navigate({ to: "/" });
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <form className="p-4 bg-white shadow rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="container">
          <h2 className="text-center mb-4">Login</h2>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="User Name" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
