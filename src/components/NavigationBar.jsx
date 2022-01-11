import {Navbar, Container, Nav} from 'react-bootstrap'

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><i class="fas fa-horse-head"></i> San Esteban Horses</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#marroquineria">Marroquineria</Nav.Link>
                        <Nav.Link href="#talabarteria">Talabarteria</Nav.Link>
                        <Nav.Link href="#polo">Polo</Nav.Link>
                        <Nav.Link href="#equitacion">Equitacion</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#user"><i class="fas fa-user"> Login</i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;