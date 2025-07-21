// import React from 'react'
// import { Container, Navbar as BootstrapNavbar, Nav} from 'react-bootstrap';

// import logo from '../../assets/logo.png'; // Ensure correct path



// function Navbar() {
//   return (
//         <BootstrapNavbar className="custom-navbar" expand="lg">
//       <Container>
//         <BootstrapNavbar.Brand href="#/" className="d-flex align-items-center">
//           <img src={logo} alt="Sri Krishnaa Cooking Equipment" className="navbar-logo" />
//           <span className="ms-2 logo-text"></span>
//         </BootstrapNavbar.Brand>

//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BootstrapNavbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#/home" className="nav-link-custom">Home</Nav.Link>
//             {/* <Nav.Link href="#/about" className="nav-link-custom">About</Nav.Link> */}
//             {/* <Nav.Link href="#/gallery" className="nav-link-custom">Gallery</Nav.Link> */}
//             {/* <Nav.Link as={NavLink} to="/gallery" className="nav-link-custom">Gallery</Nav.Link> */}
//             {/* <Nav.Link href="#/services" className="nav-link-custom">Services</Nav.Link> */}


//             {/* Dropdown for Services */}
//             {/* <NavDropdown title="Services" id="services-dropdown" className="nav-link-custom">
//               <NavDropdown.Item href="#/services/hair">Hair</NavDropdown.Item>
//               <NavDropdown.Item href="#/services/skin">Skin</NavDropdown.Item>
//               <NavDropdown.Item href="#/services/coloring">Coloring</NavDropdown.Item>
//               <NavDropdown.Item href="#/services">Services</NavDropdown.Item>
//             </NavDropdown> */}

//              {/* Contact Button */}
//             {/* <Nav.Link href="#/contact" className="nav-link-custom">Contact</Nav.Link> */}
          
//           </Nav>
//         </BootstrapNavbar.Collapse>
//       </Container>
//     </BootstrapNavbar>
//   )
// }

// export default Navbar


// Navbar.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🍳 Cooking Equipments
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
