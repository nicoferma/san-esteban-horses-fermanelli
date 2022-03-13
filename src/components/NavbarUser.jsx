import { Navbar, Container, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavbarUser = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <Navbar className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-secondary">
                <Container>
                    {user.role > 0 &&
                        <div>
                            <Button variant="secondary" onClick={() => navigate("/add-product")}>Agregar producto</Button>
                            <Button variant="secondary" onClick={() => navigate("/orders")}>Ver ordenes</Button>
                            <Button variant="secondary" onClick={() => navigate("/user")}>
                                <i className="fas fa-user "></i> {' '}
                                
                            </Button>
                        </div>
                    }
                    <Button variant="secondary" onClick={handleLogout}>Logout</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarUser