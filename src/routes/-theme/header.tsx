import { Link, useRouter } from "@tanstack/react-router";
import { useAuth } from "../../hooks/useAuth";

export const HeaderComponent = () => {
  const auth = useAuth();
  const router = useRouter();
  //   const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.logout();
    router.invalidate(); //this is just for learning purpose
    // navigate({ to: "/login" }); // use this to navigate to login after logout
  };

  return (
    <div>
      {" "}
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
    </div>
  );
};
