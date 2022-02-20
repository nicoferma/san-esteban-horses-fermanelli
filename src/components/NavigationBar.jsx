import { useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import CartWidget from './CartWidget';
import { getAllCategories } from '../services/Products';
import { useState } from 'react';


const NavigationBar = () => {
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
                    <Nav>
                        <Nav.Link as={NavLink} to={"user"}><i className="fas fa-user"></i></Nav.Link>
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