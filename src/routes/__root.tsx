import {
  createRootRoute,
  Link,
  Navigate,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Route as signInRoute } from "./signIn";

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>{" "}
      <Link to={signInRoute.to} className="[&.active]:font-bold">
        SignIn
      </Link>{" "}
      <Link
        to="/user/$id"
        params={{ id: "123" }}
        search={{
          showAll: "true",
        }}
        // hash="mox-123"
        className="[&.active]:font-bold"
      >
        User
      </Link>{" "}
      <Link to="/post/{-$id}" className="[&.active]:font-bold">
        Post
      </Link>{" "}
      <Navigate to="/about"></Navigate>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
