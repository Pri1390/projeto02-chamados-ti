import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand as="div">
            <img
              alt="logo de um computador"
              src="https://thumbs.dreamstime.com/b/repare-o-computador-logo-icon-design-125299305.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Chamados de TI
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
