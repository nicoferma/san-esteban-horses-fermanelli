import { useContext, useState } from 'react';
import { Row, Col, Container, Button,Badge } from 'react-bootstrap';
import ItemPopupCartDetailContainer from '../components/ItemPopupCartDetailContainer';
import Authenticate from '../components/Authenticate';
import { CartContext } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import AddOrder from '../components/AddOrder';
import { Link } from "react-router-dom"

const PageCart = () => {
    const { cartProducts, clear } = useContext(CartContext);
    const { user } = useAuth();
    const [order, setOrder] = useState("")


    const handleOrder = (order) => {

        setOrder(order);
        clear();
    }

    if (order) {
        return (
            <Container className="mt-4">
                <div>
                    <h2 className="text-secondary">{user.firstName}! tu compra se realizo con exito!</h2>
                    <h3 className="text-secondary">Puedes seguir el pedido con el siguiente codigo: <Badge pill bg="light" text="dark">{order}</Badge></h3>
                    <Link to={'/'}><Button variant="secondary" className="mt-2 input-block-level form-control">Seguir comprando</Button></Link> 
                </div>
            </Container>
        )
    }


    if (!cartProducts.length) {
        return (
            <Container className="mt-4">
                <h2 className="text-secondary">No tienes productos en tu carrito!</h2>

            </Container>
        )

    }


    return (
        <Container>
            <Row className="p-4">
                <Col xs={6}>
                    <ItemPopupCartDetailContainer cartProducts={cartProducts} />
                </Col>
                <Col xs={6}>
                    {user ?
                        <div >
                            <h2 className="text-secondary">{user.firstName}! tu compra se enviara a {user.street}, {user.number}, {user.city} </h2>
                            <Link to={"/user"}>Si quieres cambiar la direccion de destino click aca</Link>
                            <AddOrder handleOrder={handleOrder} />
                            <Link to={'/'}><Button variant="secondary" className="mt-2 input-block-level form-control">Seguir comprando</Button></Link> 
                        </div>
                        :
                        <Authenticate />
                    }

                </Col>
            </Row>
        </Container>
    );
};

export default PageCart;
