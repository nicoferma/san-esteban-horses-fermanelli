import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget';


const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}><i className="fas fa-horse-head"></i> SAN ESTEBAN HORSES</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"marroquineria"}>Marroquineria</Nav.Link>
                        <Nav.Link as={Link} to={"talabarteria"}>Talabarteria</Nav.Link>
                        <Nav.Link as={Link} to={"polo"}>Polo</Nav.Link>
                        <Nav.Link as={Link} to={"equitacion"}>Equitacion</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={"user"}><i className="fas fa-user"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <CartWidget />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;