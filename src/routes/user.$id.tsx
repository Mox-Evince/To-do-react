import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return (
    <div>
      Hello User!
      <div>
        <button className="btn btn-dark">{id}</button>
      </div>
      <li>Mox</li>
      <li>Mox</li>
      <li>Mox</li>
      <li>Mox</li>
      <section id="mox-123">About User</section>
    </div>
  );
}
