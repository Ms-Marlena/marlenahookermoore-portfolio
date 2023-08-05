// import React from 'react';
// export default function Header({handlePageChange}){
//     return (
//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//           <a
//             class="navbar-brand"
//             href="#"
//             onClick={() => handlePageChange("About")}
//           >
//             Marlena Hooker Moore
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a
//                   class="nav-link active"
//                   aria-current="page"
//                   href="#about"
//                   onClick={() => handlePageChange("About")}
//                 >
//                   About
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link"
//                   href="#portfolio"
//                   onClick={() => handlePageChange("Portfolio")}
//                 >
//                   Portfolio
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link"
//                   href="#contact"
//                   onClick={() => handlePageChange("Contact")}
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li class="nav-item">
//                 {/*change href to googledoc share link */}
//                 <a class="nav-link" href="#portfolio" target="_blank" rel="noreferrer">
//                   Resume
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
// }
import HeaderMiniLogo from "./Images/Profile_picture.jpeg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#about">
            <img
              alt=""
              src="/img/logo.svg"
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
              <Nav.Link href="#link">Portfolio</Nav.Link>
              <Nav.Link href="#link">Resume</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;