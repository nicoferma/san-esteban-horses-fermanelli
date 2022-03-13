import { useEffect } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import CartWidget from './CartWidget';
import { getAllCategories } from '../services/Products';
import { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";


const NavigationBar = () => {
    const { user } = useAuth();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then(categories => {
            setCategories(categories);
        });
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to={"/"}><i className="fas fa-horse-head"></i> SAN ESTEBAN HORSES</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {categories.map(category => <Nav.Link key={category.id} as={NavLink} to={category.id}>{category.name}</Nav.Link>)}

                    </Nav>

                </Navbar.Collapse>
                <Form className="d-flex me-4">
                    <FormControl
                        type="search"
                        placeholder="Buscar..."
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Buscar</Button>
                </Form>

                <Nav>

                    <Nav.Link as={NavLink} to={"user"}><i className="fas fa-user "></i> {' '}
                        {user ? <span className="text-light">{user.firstName}</span> : null} 
                        
                    </Nav.Link>

                    <CartWidget />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;