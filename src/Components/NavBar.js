import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home')

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Link</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                        </div>
                    </span>
                    <button className="vvd" onClick={()=> console.log('connect')}><spann>Lets Connect</spann></button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}