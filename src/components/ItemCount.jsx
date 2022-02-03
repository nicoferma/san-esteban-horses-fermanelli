import { useState } from "react";
import { Badge, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";

const ItemCount = ({ initial, stock, handleAddProduct }) => {

    const [quantity, setQuantity] = useState(initial);

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

            {stock ?
                (
                    <>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <InputGroup size="sm">
                                    <Button variant="secondary" onClick={handleSubstract}>-</Button>
                                    <FormControl type="text" className="text-center" value={stock ? quantity : 0} />
                                    <Button variant="secondary" onClick={handleAdd}>+</Button>
                                </InputGroup>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Badge pill bg="secondary" className="mt-2 input-block-level form-control">Disponibles: {stock}</Badge>
                        <Button variant="secondary" className="mt-2 input-block-level form-control" onClick={() => handleAddProduct(quantity)}>Agregar al carrito</Button>
                    </>
                )
                :
                <Badge pill bg="danger" className="mt-2 input-block-level form-control">Sin disponibilidad</Badge>
            }

        </>
    );
}

export default ItemCount;