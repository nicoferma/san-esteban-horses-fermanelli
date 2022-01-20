import { useState } from "react";
import { Row, Col, Card, Button, InputGroup, FormControl } from "react-bootstrap";

const ItemCount = ({ initial, stock }) => {

    const [quantity, setQuantity] = useState(initial);

    const onAdd = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const onSubtract = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Montura de Polo</Card.Title>
                    <Card.Img variant="top" src="https://cdn.lamason.us/arandu.com.ar/media/2020/06/02174514/70002G.jpg" />
                    <Card.Text>
                        MONTURA DE POLO DE 19″ PULGADAS DE SUELA HB CONFECCIONADA EN SUELA DE ALTA CALIDAD
                    </Card.Text>

                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                            <InputGroup size="sm">
                                <Button variant="secondary" onClick={onSubtract}>-</Button>
                                <FormControl type="text" className="text-center" value={ quantity } />
                                <Button variant="secondary" onClick={onAdd}>+</Button>
                            </InputGroup>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Button variant="secondary" className="mt-2">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemCount;