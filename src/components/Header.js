import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import App from "../App.js";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#about">
            {/* <img
              alt="MHM icon"
              src={require("../assets/images/logos/marlena-hooker-moore-website-favicon-black.png")}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{" "} */}
            <img
              alt="large logo: Marlena Hooker Moore, junior web developer"
              src={require("../assets/images/png/logo-no-background.png")}
              width={300}
              className="d-inline-block align-bottom"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="https://drive.google.com/file/d/1EZP214nyeXnTPHTt62aMGEP8p9GR62Qd/view?usp=sharing">
                Resume
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;