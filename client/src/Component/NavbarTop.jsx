import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function NavbarTop() {

    const navigate = useNavigate()
    return (
        <div>
            <Navbar bg="dark" fixed="top" className='p-3' variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/")}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="rounded-3 me-3 bg-light text-dark" onClick={() => navigate("/login")}   >LogIn</Nav.Link>
                            <Nav.Link className="rounded-3 me-3 bg-light text-dark" onClick={() => navigate("/signup")}>SignUp</Nav.Link>
                            <Nav.Link className="rounded-3 me-3 bg-danger text-white" onClick={() => navigate("/admin_singup")}>Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarTop