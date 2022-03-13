import { Button, Row, Col, Container, Navbar, ListGroup } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Link } from "react-router-dom";
import User from "../components/User";
import { getOrdersByUserID } from "../services/Orders";
import { useEffect, useState } from "react";
import { getStringFormatDate } from "../services/Utils";
import NavbarUser from "../components/NavbarUser";

const PageUser = () => {
    const { user, logout } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        let mounted = true;
        if (user) {
            getOrdersByUserID(user.uid).then(orders => {
                if (mounted) setOrders(orders);
            })
        }
        return () => mounted = false;
    }, []);

    if (!user) return <Navigate to="/login" />;

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col xs={6}>
                        <User />
                    </Col>
                    <Col xs={6}>
                        {orders.length ?
                            <ListGroup variant="flush" className="">
                                {
                                    orders.map(order => (
                                        <ListGroup.Item className="m-0 p-0">
                                            <Row>
                                                <Col xs={4}>
                                                    {getStringFormatDate(new Date(order.date.seconds * 1000))}
                                                </Col>
                                                <Col xs={4}>
                                                    {order.products.map(product => (
                                                        <Link key={product.id} to={`/${product.category}/${product.id}`}>{product.title} - {product.quantity}</Link>
                                                    ))}
                                                </Col>
                                                <Col xs={4}>
                                                    <strong>${order.total}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))
                                }

                            </ListGroup>
                            :
                            <h3 className="text-secondary">No haz realizado compras.</h3>
                        }
                    </Col>
                </Row>

            </Container>
            <NavbarUser />
        </>
    )
}

export default PageUser