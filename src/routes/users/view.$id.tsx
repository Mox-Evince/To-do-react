import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/view/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Container>
        <Card className="m-4 p-4">
          <CardHeader
            title={<Typography variant="h5">User Details</Typography>}
          />

          <CardContent>
            <Typography variant="h4">Mox Shah</Typography>
            <Typography variant="h6">Full Stack developer</Typography>
          </CardContent>
          <CardActions className="d-flex justify-content-center">
            <Button variant="contained" className="mx-2" color="primary">
              <Link
                from="/users"
                to="./add/{-$id}"
                params={{}}
                style={{ textDecoration: "none", color: "white" }}
              >
                Add User
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}
