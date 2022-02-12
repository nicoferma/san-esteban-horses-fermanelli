import { useContext } from "react";
import { Badge, CloseButton, Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { getPriceFormat } from "../services/Utils";

const ItemPopupCartDetail = ({ product }) => {
    const { removeProduct } = useContext(CartContext);

    const { id, title, text, price, imagesUrl, quantity } = product;

    return (
        <ListGroup.Item className="m-0 p-0">

            <Row className="mb-1 mt-1">
                <Col xs={2} className="m-0 p-0">
                    <Image src={imagesUrl[0]}
                        rounded={false}
                        roundedCircle={true}
                        thumbnail={true} />
                </Col>
                <Col xs={8} className="m-0 pl-1">
                    <div className="">
                        {title}
                        <div className="fw-bold">{getPriceFormat(price)}</div>
                        
                    </div>
                    
                </Col>
                <Col xs={2}>
                    <Row>
                        <Badge pill bg="light" text="dark">{quantity}</Badge>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <CloseButton onClick={() => removeProduct(product.id)} />
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default ItemPopupCartDetail;
