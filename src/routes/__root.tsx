import {
  createRootRouteWithContext,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { AuthContextType } from "../contexts/AuthContext";
import Header from "../components/Header";

interface RootRouteContext {
  auth: AuthContextType;
}
const RootLayout = () => (
  <>
    <Header />

    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRouteWithContext<RootRouteContext>()({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated && location.pathname !== "/login") {
      throw redirect({
        to: "/login",
      });
    }
    const pathArray = location.pathname.split("/");
    console.log(pathArray);
    if (
      location.pathname.includes("update") &&
      pathArray.length === 4 &&
      !!+pathArray[3]
    ) {
      console.log("We will handle it surely 😎");
      throw redirect({
        to: "/users/add/{-$id}",
        params: { id: pathArray[3] },
        mask: { to: location.pathname },
      });
    }
  },
  component: RootLayout,
});
