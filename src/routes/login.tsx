import { Button, Container, Input } from "@mui/material";
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
    <div>
      <form>
        <Container>
          <div className="m-2">
            <Input type="text" placeholder="user name" />
          </div>
          <div className="m-2">
            <Input type="password" placeholder="password" />
          </div>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Container>
      </form>
    </div>
  );
}
