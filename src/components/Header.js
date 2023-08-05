import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#about">
            <img
              alt=""
              src="../assets/images/logos/marlena-hooker-moore-website-favicon-black.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Marlena Hooker Moore
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1EZP214nyeXnTPHTt62aMGEP8p9GR62Qd/view?usp=sharing">Resume</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;