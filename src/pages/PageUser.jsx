import { Button, Row, Col, Container, Navbar } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import User from "../components/User";
import { getOrdersByUserID } from "../services/Orders";

const PageUser = () => {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleBtn = async () => {
        await getOrdersByUserID(user.uid)
    }

    const handleAddProduct = () => {
        navigate("/add-product")
    }

    const handleOrders= () => {
        navigate("/orders")
    }

    if (!user) return <Navigate to="/login" />;

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={6}>
                    <User />
                </Col>
                <Col xs={6}>
                    <Button onClick={handleBtn}>traer orders de este usuario</Button>
                </Col>
            </Row>
            <Navbar className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-secondary">
                <Container>
                    {user.role > 0 &&
                        <div>
                            <Button variant="secondary" onClick={handleAddProduct}>Agregar producto</Button>
                            <Button variant="secondary" onClick={handleOrders}>Ver ordenes</Button>
                        </div>
                    }
                    <Button variant="secondary" onClick={handleLogout}>Logout</Button>
                </Container>
            </Navbar>
        </Container>
    )
}

export default PageUser