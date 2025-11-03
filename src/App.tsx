import { useContext } from "react";

import "./App.css";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function MainApp() {
  const auth = useContext(AuthContext);
  return <RouterProvider router={router} context={{ auth }} />;
}
function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;
