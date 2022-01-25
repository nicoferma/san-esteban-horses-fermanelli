import { useState } from "react";
import { Badge, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";

const ItemCount = ({ initial, stock }) => {

    const [quantity, setQuantity] = useState(initial);

    const onAddToCart = () => {

    }

    const handleAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const handleSubstract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <Row>
                <Col></Col>
                <Col xs={8}>
                    <InputGroup size="sm">
                        <Button variant="secondary" onClick={handleSubstract}>-</Button>
                        <FormControl type="text" className="text-center" value={stock?quantity:0} />
                        <Button variant="secondary" onClick={handleAdd}>+</Button>
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>
            {stock ?
                <Badge pill bg="secondary" className="mt-2 input-block-level form-control">Disponibles: {stock}</Badge> :
                <Badge pill bg="danger" className="mt-2 input-block-level form-control">Sin disponibilidad</Badge>
            }

            <Button variant="secondary" className="mt-2 input-block-level form-control" onClick={onAddToCart}>Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;