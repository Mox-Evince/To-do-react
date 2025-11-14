import { Container, Typography } from "@mui/material";
import { useParams } from "@tanstack/react-router";

function Header() {
  const { postid } = useParams({ strict: false });
  return (
    <div>
      <Container>
        <Typography variant="h5"> Showing Post with ID: </Typography>
        <Typography variant="h4">{postid}</Typography>
      </Container>
    </div>
  );
}

export default Header;
