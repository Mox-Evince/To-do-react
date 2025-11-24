import { useParams } from "@tanstack/react-router";

function Header() {
  const { postid } = useParams({ strict: false });
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container">
        <span className="navbar-brand mb-0 h1">
          Showing Post with ID: <small className="text-muted">{postid}</small>
        </span>
      </div>
    </nav>
  );
}

export default Header;
