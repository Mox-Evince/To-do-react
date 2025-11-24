import {
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/add/{-$id}")({
  component: SaveUserComponent,
});

function SaveUserComponent() {
  const { id } = Route.useParams();
  console.log(id);
  return (
    <div>
      <Container>
        <Typography variant="h4">{id ? "Update" : "Add"} User</Typography>
        <FormGroup className="my-4">
          <FormControl className="gap-3">
            <TextField label="Enter name" fullWidth />
            <TextField label="Enter mobile" fullWidth />
          </FormControl>
        </FormGroup>
      </Container>
    </div>
  );
}
